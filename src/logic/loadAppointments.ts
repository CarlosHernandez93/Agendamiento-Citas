export async function createNewAppointment(){
    const res = await fetch('http://localhost:3000/api/appointment',{
        method: 'POST',
        body: JSON.stringify('as')
    });
    return res.json();
}