export async function loadSchedules(){
    const res = await fetch('http://localhost:3000/api/schedules');
    const data = await res.json();
    return data;
}