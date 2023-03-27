const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

const searchStates = async searchText => {
    // async function getMajor() {
    const res = await fetch('./majors.json');
    const states = await res.json();

      // console.log(majors);
    //   let matches = states.filter(state => {
    //     const regex = new RegExp(`^${searchText}`, 'gi');
    //     return state.name.match(regex) || state.abbreviation.match()
    //   });
    console.log(states);
}

search.addEventListener('input', () => searchStates(search.value));