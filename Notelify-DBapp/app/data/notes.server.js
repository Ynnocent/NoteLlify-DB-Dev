import { prisma } from "./database.server";

export async function addNoteData(noteData, userId) {
    const submissionDate = new Date().toISOString();

    try {
        console.log(submissionDate)
        return await prisma.note.create({data: {
        title: noteData.title,
        note: noteData.content,
        date: submissionDate,
        user: {connect: {id: userId}}
    }});
    } catch (error) {
        console.log(error);
        throw error;
    }

    
}

export async function getNoteData(userId) {
    try {
        const noteData = await prisma.note.findMany({where:{userId: userId}, orderBy: {date: 'desc'}});
        return noteData;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getSingularNoteData(id) {
    try {
        const noteSingularData = await prisma.note.findFirst({
            where: {id: id}
        })
        return noteSingularData;
    } catch (error) {
        console.log(error);
        throw error
    }
}

export async function delNoteData(id) {
    try {
        return await prisma.note.delete({where: {id : id}})
    } catch (error) {
        console.log(error);
        throw(error)
    }
}

export async function updateNoteData(id, noteData) {
    try {
        return await prisma.note.update({where: {
            id: id
        }, data: {
            title: noteData.title,
            note: noteData.content,
            // date: new Date(noteData.date)
        }
    })
    } catch (error) {
        console.log(error);
        throw error
    }
}