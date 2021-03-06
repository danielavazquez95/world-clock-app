
export const getListTimeZones = async () => {

    const resp = await fetch('https://worldclock-app.herokuapp.com/api/timezones');
    const data = await resp.json();

    return data;
};

export const getTimeZone = async (timezone) => {

    const resp = await fetch(`https://worldclock-app.herokuapp.com/api/timezones/${timezone}`);
    const data = await resp.json();

    return data;
};

export const uploadDB= async (timezone) => {

    const resp = await fetch('https://worldclock-app.herokuapp.com/api/timezones/dbupload', {
        method: 'POST',
        body: JSON.stringify(timezone),
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await resp.json();

    return data;
};


export const loadDB = async () => {

    const resp = await fetch('https://worldclock-app.herokuapp.com/api/timezones/dbload');
    const data = await resp.json();

    return data;

};

export const deleteDB = async (id) => {
    const resp = await fetch(`https://worldclock-app.herokuapp.com/api/timezones/dbdelete/${id}`, {
    method: 'DELETE'
    });
    const data = await resp.json();

    return data;
};