import md5 from 'md5';


const gravatar = (email) => {
    const base = 'https://gravatar.com/avatar/';
    // trim() elimina espacios
    const formattedEmail = email.trim().toLowerCase();
    //encoding, para mandar en formatio binario el arrova
    const hash = md5(formattedEmail, { encoding: 'binary' });
    console.log(`${base}${hash}`)
    return `${base}${hash}`;
}

export default gravatar;