// axios
//     .get('https://swapi.dev/api/people/2')
//     .then((res) => {
//         console.log('Response: ', res)
//     })
//     .catch((e) => {
//         console.log('Error!', e);
//     });


const getStarWarsPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`);
        console.log(res.data);
    } catch (error) {
        console.log('ERROR', error);
    }
}

getStarWarsPerson(5);