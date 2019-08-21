import voterABI from './voterABI'
import candidateABI from './candidateABI'
import electionABI from './electionABI'
var Web3 = require("web3");
// var provider = new Web3.providers.HttpProvider("https://user.blockchain.azure.com:3200/QfZMn5Qgr4NYV8EEp9wHi6fQ");
// var web3 = new Web3(provider);
//import Web3 from 'web3'
let metamaskWeb3 = new Web3('http://localhost:8545')
let account = null
let voterContract
let voterContractAddress = '0xf2365c97c918b3ae0074edb6d445eab6c5db5e74' // Paste Contract address here

export function web3() {
  return metamaskWeb3
}

export const accountAddress = () => {
  return account
}

// export async function setProvider() {
//   // TODO: get injected Metamask Object and create Web3 instance
//   if (window.ethereum) {
//     metamaskWeb3 = new Web3(ethereum);
//     try {
//       // Request account access if needed
//       await ethereum.enable();
//     } catch (error) {
//       // User denied account access...
//       console.log(error);
//     }
//   }
//   else if (window.web3) {
//     metamaskWeb3 = new Web3(web3.currentProvider);
//   }
//   account = await metamaskWeb3.eth.getAccounts()
// }


function getvoterContract() {
  // TODO: create and return contract Object
  voterContract = voterContract || new metamaskWeb3.eth.Contract(voterABI.abi, voterContractAddress)
  return voterContract

}

function candidateContract() {
  // TODO: create and return contract Object of candidate instance
  candidateContract = candidateContract || new metamaskWeb3.eth.Contract(candidateABI.abi, voterContractAddress)
  return candidateContract

}

function electionContract() {
  // TODO: create and return contract Object of candidate instance
  electionContract = electionContract || new metamaskWeb3.eth.Contract(electionABI.abi, voterContractAddress)
  return electionContract

}



export async function voterAdd() {
  // TODO: call voter.addvideo
  const prop = await getvoterContract().methods.addVoter('Suresh Kumar', 45, 9024826680, 500, 491947070016, 'b64c83dbf9c97c39c').send({
    from: account[0]
  })
  alert('Voter added Sucessfully')
}

export async function voterNum() {
  // TODO: call voter.numVideo
  const prop = await getvoterContract().methods.getNumOfVoters().send({
    from: account[0]
  })
  return prop;
}

export async function candidateAdd(party,constituencyid) {
  // TODO: call addcandidate from candidate.sol
  const prop = await candidateContract().methods.addCandidate(party, constituencyid).send({
    from: account[0],
    value: 1,
  })
  alert('Candidate added Successfully')
}

export async function candidateNum() {
  // TODO: call candidateNum from the candidate.sol
  const prop = await getcandidateContract().methods.getNumOfCandidates().send({
    from: account[0]
  })
  return prop;
}

export async function constituencyAdd(constituencyid, name) {
  // TODO: to add constituency function from election.sol
  const prop = await electionContract().methods.createConstituency(constituencyid, name).send({
    from: account[0],
    value: 1,
  })
  alert('Constituency added Successfully')
}

export async function voterValidation(voteraddress) {
  // TODO: call addcandidate from candidate.sol
  const prop = await electionContract().methods.validateVoter(voteraddress).send({
    from: account[0],
    value: 1,
  })
}

export async function votertoconstituency(constituencyid,voteraddress) {
  // TODO: call voter to constituency from election.sol
  const prop = await electionContract().methods.addVoterToConstituency(constituencyid,voteraddress).send({
    from: account[0],
    value: 1,
  })
}

export async function candidatetoconstituency(constituencyid, candidateaddress) {
  // TODO: call addCandidateToConstituency form election.sol
  const prop = await electionContract().methods.addCandidateToConstituency(constituencyid, candidateaddress).send({
    from: account[0],
    value: 1,
  })
}

export async function totalVotes(candidateaddress, constituencyid) {
  // TODO: get total votes from election.sol
  const prop = await electionContract().methods.totalVotesFor(candidateaddress, constituencyid).send({
    from: account[0],
    value: 1,
  })
  return prop;
}

export async function candidateVotes(candidateaddress, constituencyid) {
  // TODO: get total votes from election.sol
  const prop = await electionContract().methods.voteForCandidate(candidateaddress, constituencyid).send({
    from: account[0],
    value: 1,
  })
  return prop;
}




// export async function fetchAllVoters() {
//   // TODO: call voter.propertyId

//   const totalVoter = await getvoterContract().methods.voterNos().call()
//   //
//   // // iterate till property Id
//      const voters = []
//   for (let i = 0; i < totalVoter; i++) {
//     const p = await voterContract.methods.(i).call()
//     voters.push({
//       id: i,
//       name: p.name,
//       description: p.description,
//       users: p.users
//     })

//   }
//   return voters
//   //push each object to properties array
// }
