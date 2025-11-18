
async function fetchProfileData() {
  const url = 'http://127.0.0.1:5500/data/profile.json';
  const fetching = await fetch(url)
  return await fetching.json()
}