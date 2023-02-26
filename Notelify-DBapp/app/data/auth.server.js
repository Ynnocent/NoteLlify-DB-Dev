import {prisma} from './database.server';
import {hash, compare} from 'bcryptjs';
import { createCookieSessionStorage, redirect } from '@remix-run/node';

const SESSION_SECRET = process.env.SESSION_SECRET;

const sessionStorage = createCookieSessionStorage({
    cookie:{
        secure: process.env.NODE_ENV === 'production',
        secrets: [SESSION_SECRET],
        sameSite: 'lax',
        maxAge: 30 * 24 * 60 * 60,
        httpOnly: true
    }
});

async function createUserSession(userId, redirectPath) {
    const session = await sessionStorage.getSession();
    session.set('userId', userId);
    return redirect(redirectPath, {
        headers: {
            'Set-Cookie': await sessionStorage.commitSession(session)
        },
    })
}

export async function getUserFromSession(request) {
    const session =  await sessionStorage.getSession(
        request.headers.get('Cookie')
        );
    
    const userId = session.get('userId');

    if (!userId) {
        return null;
    }

    return userId;
}

export async function signup({email, password}) {
    const existingUser = await prisma.user.findFirst({where: {email: email}});

    if (existingUser) {
        const error = new Error("A user with this email exists. Try a new one or not I guess.");
        error.status = 422;
        throw error;
    }

    const hashPassword = await hash(password, 12);

    const user = await prisma.user.create({data: {
        email: email,
        password: hashPassword
    }})

    return createUserSession(user.id, "/notes");
}

export async function login({email, password}) {
    const existingUser = await prisma.user.findFirst({where: {email: email}});

    if (!existingUser) {
        const error = new Error("Hmmmm... Invalid credentials. Check your email or password");
        error.status = 401;
        throw error;
    }

    const unhashPassword = await compare(password, existingUser.password);

    if (!unhashPassword ) {
        const error = new Error("Hmmmm... Invalid credentials. Check your email or password");
        error.status = 401;
        throw error;
    }

    return createUserSession(existingUser.id, "/notes");
}

export async function destroyUserSession(request) {
    const session =  await sessionStorage.getSession(
        request.headers.get('Cookie')
        );

    return redirect("/",{
        headers: {
            'Set-Cookie': await sessionStorage.destroySession(session),
        }
    });
    
}

export async function requireUserSession(request) {
    const userId = await getUserFromSession(request);

    if (!userId) {
        throw redirect('/auth?mode=login');
    }

    return userId;
}