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

![Credits- its-mayank](https://github.com/arkeo01/B-HackersCFD/blob/master/news.jpg)

## The Election System (Proper name to be given)

With the progression of technology, humanity has discovered new ways of doing things which previously thought as impossible. Keeping this in mind, as a solution to all the problems stated above, we propose an entirely new way of conducting elections. We propose to build a complete one of its kind ecosystem in which smooth, free and fair, secure, fast and reliable way of conducting the elections, proper dissemination of information and assistance to voters for making an informed decision would be carried out. This would be achieved by employing a very unique combination of technologies from Web2.0 and Web3.0. Hence we propose an **election system with two components** described below:

![Credits- its-mayank](https://github.com/arkeo01/B-HackersCFD/blob/master/both.png)

### 1. Voting Component(only accessible to special Centers aka Polling booths):
Election day is the essence of our democratic country, but conducting the most significant elections in the whole world can sometimes become a tedious affair. This component is designed keeping in mind a smooth voting experience, with a robust and straightforward backend to avoid any fake voting and hacking accusation.

- **Secure Authentication**:
All voters contesting in the elections would receive a QR code along with their voter ID which would be used to authenticate the voter. To make the process more secure, a biometric authentification will also be done, adding another layer of security to prevent fake Voting. The component will also check for multiple voters ID's under the same name to ensure one person cannot make many votes.

- **Universal Polling Booth**:
Allocation of a particular polling booth is one of the primary reason that people are not able to show up to vote. Having a universal pooling booth system would let a voter cast his vote from any part of the country. (It depends on the type of elections. In a state election, the voter can vote from any polling booth of the state)

- **Geo-fencing of the Polling Booth**
 The machines would be Geo-fenced using GPS technology to avoid any tampering with the polling equipment and illegal Voting outside the pooling booth.

 - **Clean UI**
The voting machines would provide a clear UI with enlarged text and images to segregate different candidates and avoid any confusion. It would also give the voters with a summary of the candidates if clicked on, to help the voters make an informed decision (Check Election Helper Component ->Know your Candidate)

- **Global Connectivity**
The system is designed to work at places even with low or even no internet connectivity to ensure the coverage throughout India. (4G/3G/2G/USSD)


![Credits- its-mayank](https://github.com/arkeo01/B-HackersCFD/blob/master/Voting_component.png)





### 2. Election Helper Component(accessible to all of the voters):
As we all know the importance of the election, it is equally important to know the importance of our election process. To ease and make elections more transparent and clean the process should also be revamped. Thus we propose another component to our system which handles all the requests for nominations, form filling, news, etc. We believe that Blockchain can provide a vital and much simpler solution to all these hectic parts of an election. Summary of features of our Election Helper Component can be found below:

- **Filing Nominations**: Nominations of all the candidates who are contesting in the election, should fill their nomination form through this component of our system. This makes their information readily available to all at ease and more securely using the various hashing techniques used in Blockchain. Filing nominations through these process would also help us to validate all the information the candidate has provided with the previous details if he has some stored, thus making it near impossible for someone to change information and fill new nomination form in each election making the election process more Secure and Democratic.

- **Applying for New Voter-ID/Managing New Voter ID(Unique Identification Number)**: All the persons who had crossed the mark of 18 years (in India) are eligible for Voting, hence providing them with their unique identification number is a big headache, but with the help of Blockchain this task becomes much more comfortable and secure and preventing various frauds such as Double Registration, Fake Registration, False Information Updates, Updating the list of available voter. This feature of our component includes features such as Registration of new User, Updation of Information in Existing Users, Validation of all the information provided, etc.

- **Know your Candidate**: As the basic principle of democracy suggests people themselves select their representative, to help all the citizens to make a better and understood choice our app would provide some assistance in the form of this feature. Many of the times people cast their votes/ make their opinions by just listening to other people, news, and rumors which may or may not be true thus in helping to remove this ambiguity, we are providing with some fundamental things which we think would help a citizen to make a better decision namely,
    1. Details of him, which he had supplied in the nomination form.
    2. The promises he made for his constituency.
    3. Past promises made and list of completed things(In case he/she is standing again).
    4. Recent news and Present News and Criminal records.
   
- **Instant Results**: As the elections are going more transparent and more accessible, we would propose to show elections results on the same day after the Voting ends, as it would save a lot of time(3-4 days of EVM collection and one whole exclusive day for Voting). Hence avoiding less chance of breaking security and usage of less human resources.

- **Grievance Readdresal Portal**: Since democracy is based on the satisfaction of its citizens, thus addressing their grievances is a significant part. Understanding this underlying problem, we had provided an option for grievance redressal in our DApp, thus making it easier for all the citizens to complain about any injustice that happened to them or any inconvenience they faced.

- **News Portal**: One of the significant Headache in the season of election is to keep track of all the announcements, news, etc. all day, and Fake news adding more fuel in the Headache. Thus our DApp seems to provide a streamlined solution to this problem by providing news from all the primary reputed Sources in one place thus helping all the voters to keep a hand at all the major announcements, manifestos, news from all around the country and helping them to choose their representative more carefully.


![Credits- its-mayank](https://github.com/arkeo01/B-HackersCFD/blob/master/Election_helper_Component.png)

## Challenges to be encountered
Though being developed and improved by a very vibrant community, Blockchain Technology is currently in its infancy and hence in the process of developing a system for conducting elections on blockchain following are the challenges that lie in front of us: 

#### 1. Scalability : 
India, with a population of over 1.3 billion with a voting population in millions the scale at which elections are conducted is massive. Currently, the no. of transactions processed per second are in the range of 3-20. Hence building a system with this big of a scale where millions of transactions are supposed to be performed simultaneously is a humongous challenge.

#### 2. Privacy : 
Ensuring that each person votes in a very secure manner without the risk of being tampered and more importantly keeping in mind the principle of secrecy of the voter is again a challenge which is to be solved. **zk-SNARKS may be used to solve this problem**

## Tentative Implementation 

#### 1. MultiSig While Voting 

#### 2. zk-Snarks to be used for identity verification

#### 3. Cryptographically signed voter Id to be generated for each user by government

#### 4. <Implementation for scalability i.e. increasing no. of transactions/second>

## Tech Stack Used 
- Nodejs
- Solidity
- More to be added

