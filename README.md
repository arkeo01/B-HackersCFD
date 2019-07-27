# The Election Ecosystem by the B-Hackers
India is the largest democracy in the world. In democracies everywhere around the globe, Elections play an integral role. But with the population of the size of roughly 1.3 Billion, conducting fair elections involves tackling a lot of challenges. Also in recent times a lot of parties have been consistently accusing EVMs of its safety, and moreover there have been a lot of errors in the process leading to the sometimes wrong candidate getting elected. Hence, a question arises whether a more secure process exists, that can be employed in place of the existing one. 

The invention of Bitcoin introduced to the world a more robust technology tackling very fundamental human problems like security, transparency, and trust establishment. Looking into the future, the same properties of Blockchain can provide a suitable alternative in developing a process that is more transparent, secure, and trustworthy. We, as curious engineers of IIT Jodhpur, are now trying to develop the same alternative using Ethereum/Hyperledger Blockchain the details of which are given in this document.


## Problems in the current election process:
Before going forward to describe the original idea, we would like first to specify the problems and challenges that we are catering by this Dapp.

#### 1. The Nomination of Candidates: 
  The nomination of candidates involves submitting various documents, and currently, there is no way to verify the validity of the documents submitted by a particular candidate.
#### 2. EVM Hacking Accusation: 
EVM has been consistently being accused of its hacking, and the explanation by the Election Commission doesn't seem satisfying.
#### 3. Fake Voting: 
Faking Voting takes place a lot of times when a particular person has changed location or died.
#### 4. Results Declaration: 
The process of counting votes is a very cumbersome process taking an entire day.
#### 5. Names missing from voter's list: 
At times people are not able to find their names in the Electoral list due to which they are not able to cast their votes.
#### 6. Uninformed Decisions:
People are generally unknown about a lot of information about the candidates such as education, criminal cases, etc. which leads to making uninformed and dumb decisions.
#### 7. Unavailability of Voter in Constituency:
Many of times it happens that one person that is registered in his/her constituency but currently is doing work/job in any other part of India and is not possible for him/her to come and cast a vote.
#### 8. Booth Capturing:
In the current system there is a risk of booth capturing as EVMs currently do not have the ability to verify whether only one vote can be casted by any citizen. Hence there are many a times instances of booth capturing and multiple votes are given by a single person.

![Credits- its-mayank](https://github.com/arkeo01/B-HackersCFD/blob/master/news.jpg)

## The Election System (Proper name to be given)

With the progression of technology, humanity has discovered new ways of doing things which previously thought as impossible. Keeping this in mind, as a solution to all the problems stated above, we propose an entirely new way of conducting elections. We propose to build a complete one of its kind ecosystem in which smooth, free and fair, secure, fast and reliable way of conducting the elections, proper dissemination of information and assistance to voters for making an informed decision would be carried out. This would be achieved by employing a very unique combination of technologies from Web2.0 and Web3.0. Hence we propose an **election system with two components** which would work hand in hand to achieve the solution to all the problems. The two solutions are described below: 

![Credits- its-mayank](https://github.com/arkeo01/B-HackersCFD/blob/master/both.png)

### 1. Voting Component(only accessible to special Centers aka Polling booths):
Election day is the essence of our democratic country, but conducting the most significant elections in the whole world can sometimes become a tedious affair. This component is designed keeping in mind a smooth voting experience, with a robust backend to avoid any fake voting and hacking accusation.

#### Voting Process : 
##### 1. Registration of Voter : 
Any citizen of India with age 18 or above would be registering himself/herself with the help of the election helper component by providing the necesary documents. A cryptographically signed voter id with a QR Code(linked with unique identification detail like fingerprint) and a voToken, token used for voting would be then issued by the system to the citizen allowing him/her to vote.

##### 2. Voting at the nearby polling station : 
On reaching the polling station the QR Code would be then scanned and then verified with the unique identification detail of the voter. The list of candidates contesting the elections from the voter's residing constituency would then pop up on the screen from which the voter can select and caste vote. While casting the vote multiple signatures would be required, both of presiding officer and the voter.

**DHRUV INCLUDE A FLOW DIAGRAM HERE**

#### Features :
##### 1. Secure Authentication :
All voters contesting in the elections would receive a QR code along with their voter ID which would be used to authenticate the voter. A biometric authentication will also be done, to ensure the validity of the voter, adding another layer of security to prevent fake Voting. 

##### 2. Booth Capturing Proof :
Authentication before casting vote and only one VoToken issued to each voter ensures the prevention from booth capturing.
  
##### 3. Remote Voting :
Voter are required to authenticate into the system and the constituency of the voter is detected automatically. This would let a voter cast his vote from any part of the country. (It depends on the type of elections. In a state election, the voter can vote from any polling booth of the state).

##### 4. Privacy of Voter :
Cryptographic techniques like zkSNARKS would be used to ensure that the vote stays private and no information about the voter is revealed by looking at the transactions.

##### 4. Geo-fencing of the Polling Booth :
 The machines would be Geo-fenced using GPS technology to avoid any tampering with the polling equipment and illegal Voting outside the pooling booth.

##### 5. Clean UI :
Though this feature seems very obvious but it is a serious problem when a voter is of a very old age or illeterate. The voting machines would provide a clear UI with enlarged text and images to segregate different candidates and avoid any confusion.

##### 6. Global Connectivity :
The system is designed to work at places even with low or even no internet connectivity to ensure the coverage throughout India. (4G/3G/2G/USSD)

**MAYANK MODIFY THE IMAGE BELOW AS PER THE UPDATED CONTENT**

![Credits- its-mayank](https://github.com/arkeo01/B-HackersCFD/blob/master/Voting_component.png)


### 2. Election Helper Component(accessible to all of the voters):
To ease and make elections more transparent, clean and efficient this component is added. This component of the system is added to provide the supporting processes of elections like filing of nomination, applying for voter id, dissemination of official news, declaration of results etc. We believe that Blockchain can provide a vital and much simpler solution to all these hectic parts of an election. 

#### Processes : 
##### 1. Applying for voter id :
1. A request would be generated by the citizen in the system.
2. Appropriate documents would be submitted digitally.
3. Unique Identification detail like fingerprint of the person to be recorded.
4. Verification of the documents to be undertaken by the officials.
5. Voter Id with a QR Code linked with the unique identification detail to be generated and issued to the person.


**DHRUV INCLUDE A FLOW DIAGRAM HERE**

##### 2. Filling of Nominations :
1. A request would be generated by the citizen in the system.
2. Appropriate documents would be submitted digitally.
3. Documents would undergo scrutiny by the election officials.
4. A token linked to a constituency would be issued to the person indicating it to be a candidate.


**DHRUV INCLUDE A FLOW DIAGRAM HERE**

#### Features:

##### 1. Filing Nominations: 
Nominations of all the candidates who are contesting in the election, would fill their nomination form through this component. This makes their information readily available to all at ease and more securely using the various hashing techniques used in Blockchain. Filing nominations through these process would also help us to validate all the information the candidate across different elections he has contested.

##### 2. Applying for New Voter-ID/Managing Voter ID : 
This component would allow any citizen of India with 18 or above years of age to get themselves registered for voting. Also the feature for managing the voter id(such as change in the location of the voter) will also be provided by this component.

##### 3. Security from fake voting : 
With the help of blockchain, the provenance of the information of all the voters would be stored securely on the blockchain. Hence instances of fake voting and voting of same voter from two different locations are curbed.

##### 4. Know your Candidate : 
The vote of a voter is often influenced by other peoples' opinion, news, rumors(which may not be true), etc. thus with the help of this component we aim to bring the information about the candidates at the fingerprints of a voter to help one to make an informed decision. Hence we provide the following information : 
    1. Details of condidates like education, criminal cases, etc.
    2. The promises he made for his constituency.
    3. Past promises made and list of completed ones(In case he/she is contesting again).
   
##### 5. Instant Results :
By this component the results would be displayed instantly after the ending of voting time period saving a lot of time(3-4 days of EVM collection and one whole exclusive day for Vote counting). Hence dramatically decreasing the chances of brealing security and decreasing the resources and capital needed.

##### 6. Grievance Readdresal Portal:
Since democracy is based on the satisfaction of its citizens, thus addressing their grievances is a significant part. Understanding this underlying problem, we had provided an option for grievance redressal in our DApp, thus making it easier for all the citizens to complain about any injustice that happened to them or any inconvenience they faced.

##### 7. Prevention from missing names : 
The specified registration process of the voter is such that it itself ensures that no name would be missing from the voters list as the list would be stored in a secured daabase built on blockchain. Moreover the authentication process while voting itself ensures that no name is needed to be verified in the voting list before voting!

**MAYANK MODIFY THE IMAGE BELOW AS PER THE UPDATED CONTENT**

![Credits- its-mayank](https://github.com/arkeo01/B-HackersCFD/blob/master/Election_helper_Component.png)

## Note on scalability :
As it is very well known that scalability is a huge challenge that currently lies in front of the blockchain community it presents a challenge in this system as well. Currently the number of transactions per second in the Ethereum network is in the range of 3-10 transactions per second. Though there is no generalized method for scaling known yet, but few solutions do show some hope which may be the answer to scalability for this application. Currently we are thinking of implementing the technique of sharding of the blockchain but **this is not finalized and may be changed** depending on further implementation details of this project.

## Tech Stack Used 
- Nodejs
- Solidity
- Azure Blockchain
- More to be added

