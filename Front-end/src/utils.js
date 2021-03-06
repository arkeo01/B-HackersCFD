import voterABI from './contractABI/voterABI'
import candidateABI from './contractABI/candidateABI'
import electionABI from './contractABI/electionABI'
import tokenERC20ABI from './contractABI/tokenERC20ABI'
import voTokenABI from './contractABI/voTokenABI'
const Web3 = require('web3');
// var provider = new Web3.providers.HttpProvider("https://user.blockchain.azure.com:3200/QfZMn5Qgr4NYV8EEp9wHi6fQ");
// var web3 = new Web3(provider);
//import Web3 from 'web3'
let metamaskWeb3 = new Web3('http://localhost:8545')
let account = null
let voterContract, candidateContract, electionContract, tokenERC20Contract, voTokenContract
let voterContractAddress = '0xd8e901fec68a12b617a19590f44b331d16d394cb' // Paste Contract address here
let candidateContractAddress = '0xc8772a040787c0f91800b81efccbbeb9b6bb044b' // Paste Contract address here
let tokenERC20ContractAddress = '0x11ef2607bb4f3f71c42a8b4f63daa14cd1e45bc4' // Paste Contract address here
let voTokenContractAddress = '0xb3efdc1bcba042691f51b364e5ea67e6a1283338' // Paste Contract address here
let electionContractAddress = '0xed520b1053e81b55993f2dee132ae10d8f4d3ca5' // Paste Contract address here

export function web3() {
  return metamaskWeb3
}

export const accountAddress = () => {
  return account
}

export async function setProvider() {
  //TODO: get injected Metamask Object and create Web3 instance
  if (window.ethereum) {
    metamaskWeb3 = new Web3(window.ethereum);
    try {
      // Request account access if needed
      await window.ethereum.enable();
    } catch (error) {
      // User denied account access...
    }
  } else if (window.web3) {
    metamaskWeb3 = new Web3(web3.currentProvider);
  }
  account = await metamaskWeb3.eth.getAccounts()
}


function getVoterContract() {
  // TODO: create and return contract Object
  voterContract = voterContract || new metamaskWeb3.eth.Contract(voterABI.abi, voterContractAddress)
  return voterContract

}

function getCandidateContract() {
  // TODO: create and return contract Object of candidate instance
  candidateContract = candidateContract || new metamaskWeb3.eth.Contract(candidateABI.abi, candidateContractAddress)
  return candidateContract

}

function getElectionContract() {
  // TODO: create and return contract Object of candidate instance
  electionContract = electionContract || new metamaskWeb3.eth.Contract(electionABI.abi, electionContractAddress)
  return electionContract

}


export async function voterAdd() {
  // TODO: call voter.addvideo
  const prop = await getVoterContract().methods.addVoter('Suresh Kumar', 45, 9024826680, 500, 491947070016, 'b64c83dbf9c97c39c').send({
    from: account[0]
  })
  alert('Voter added Sucessfully')
  return true;
}

export async function voterNum() {
  // TODO: call voter.numVideo
  const prop = await getVoterContract().methods.getNumOfVoters().send({
    from: account[0]
  })
  return prop;
}

export async function candidateAdd(party = "BJP",constituencyid = 12) {
  // TODO: call addcandidate from candidate.sol
  const prop = await getCandidateContract().methods.addCandidate(party, constituencyid).send({
    from: account[0]
  })
  alert('Candidate added Successfully')
}

export async function candidateNum() {
  // TODO: call candidateNum from the candidate.sol
  const prop = await getCandidateContract().methods.getNumOfCandidates().send({
    from: account[0]
  })
  return prop;
}

export async function constituencyAdd(constituencyid, name) {
  // TODO: to add constituency function from election.sol
  const prop = await getElectionContract().methods.createConstituency(constituencyid, name).send({
    from: account[0],
  })
  alert('Constituency added Successfully')
}

export async function voterValidation(voteraddress) {
  // TODO: call addcandidate from candidate.sol
  const prop = await getElectionContract().methods.validateVoter(voteraddress).send({
    from: account[0],
  })
  alert('Voter Validated Successfully')
}

export async function votertoconstituency(constituencyid,voteraddress) {
  // TODO: call voter to constituency from election.sol
  const prop = await getElectionContract().methods.addVoterToConstituency(constituencyid,voteraddress).send({
    from: account[0],
  })
}

export async function candidatetoconstituency(constituencyid, candidateaddress) {
  // TODO: call addCandidateToConstituency form election.sol
  const prop = await getElectionContract().methods.addCandidateToConstituency(constituencyid, candidateaddress).send({
    from: account[0],
  })
}

export async function totalVotes(candidateaddress, constituencyid) {
  // TODO: get total votes from election.sol
  const prop = await getElectionContract().methods.totalVotesFor(candidateaddress, constituencyid).send({
    from: account[0],
  })
  return prop;
}

export async function voteforCandidate(candidateaddress, constituencyid) {
  // TODO: get total votes from election.sol
  const prop = await getElectionContract().methods.voteForCandidate(candidateaddress, constituencyid).send({
    from: account[0],
  })
  alert('Vote casted Successfully')
}




// export async function fetchAllVoters() {
//   // TODO: call voter.propertyId

//   const totalVoter = await getVoterContract().methods.voterNos().call()
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
