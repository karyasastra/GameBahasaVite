import localforage from "localforage";

export default async function send(tipe: 'Puisi' | 'Cerpen', short: string, abstrak: null | string[], konten: string){
    const nama:string = await localforage.getItem('nama') ?? '';
    const email:string = await localforage.getItem('email') ?? '';
    const subject = `${tipe}: ${short}`;
    const formData = new FormData();

    let msg = '';
    if (abstrak != null){
        msg += '# Abstrak\n\n';
        msg += abstrak.join('\n\n');
        msg += '\n\n';
    }
    if(konten){
        msg += `# ${tipe}\n\n`;
        msg += konten
    }

    formData.append('name', nama);
    formData.append('subject', subject);
    formData.append('message', msg);

    return fetch(email, {
        method: 'POST',
        body: formData,
    })
}
