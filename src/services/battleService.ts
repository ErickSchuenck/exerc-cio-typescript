import axios from "axios"
export async function battle(firstUser: string, secondUser: string) {
  const firstUserRepos = await getFighterRepos(firstUser)
  const secondUserRepos = await getFighterRepos(secondUser)
  const firstUserStarCount = getFighterStarCount(firstUserRepos)
  const secondUserStarCount = getFighterStarCount(secondUserRepos)
}

async function getFighterRepos(username:string) {
  const {data} = await axios.get(`api.github.com/users/${username}/repos`)
  return data;
}

async function getFighterStarCount(fighterRepos: any[]) {
  const repoStars = fighterRepos.map(repo => repo.starGazers_count);
  if(repoStars.length === 0) { 
    return 0 
  };
  return repoStars.reduce((current:number, sum: number) => sum + current)
}
