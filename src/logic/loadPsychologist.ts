export async function loadPsychologist(){
    const res = await fetch('http://localhost:3000/api/psychologist');
    const data = await res.json();
    return data;
}