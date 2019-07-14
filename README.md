# The Election System by the B-Hackers
India is the largest democracy in the world. In democracies everywhere around the world Elections play an integral role. But with the population of the size of roughly 1.3 Billion, conducting fair elections involves tackling a lot of challenges. Also in the recent times a lot of parties have been consistently accussing EVMs of its safety and moreover there have been a lot of errors in the process leading to sometimes wrong candidate getting elected. Hence, a question arises whether a more secure process exists, that can be employed in place of the existing one... 

The invention of Bitcoin introduced to the world a more robust technology tackling very fundamental human problems like security, transparancy and trust establishment. Looking into the future the same properties of blockchain can provide a suitable alternative in developing a process that is more transparent, secure and trustworthy. We as inquisitive engineers of IIT Jodhpur are hereby trying to develop the same alternative using Ethereum/Hyperledger Blockchain the details of which are given in this document.


## Problems in the current election process:
Before going forward to describe the actual idea we would like to first specify the problems that we are attempting to solve by this Dapp.


### Election Helper Component
As we all know the importance of election it is equally important to know the importance of our elcetion process. To ease and make elections more transparent and clean the process should also be revamped. Thus we propose another componenet to our system which handles all the requests for nominations,form filling,news etc.We belive that blockchain can provide a vital and much simpler solutions to all these hectic parts of an election. Summary of features of our Election Helper Componenet can be found below:

- **Filing Nominations**: Nominations of all the candidates whom are contesting in election, should fill their nomination form through this component of our system.This makes their information readily available to all at ease and more securely using the various hashing techniques used in Blockchain.Filing nominations through these process would also help us to validate all the information the candidate has provided with the previous details if he has some stored, thus making it near impossible for someone to change information and fill new nomination form in each election making election process more Secure and Democratic.

- **Applying for New Voter-ID/Managing New Voter ID(Unique Identification Number)**: All the persons who had crossed the mark of 18 year(in India) are eligible for Voting, hence providing them with their unique identification number is a big headache, but with the help of Blockchain this task becomes much more easy and secure and preventing various frauds such as Double Registraion,Fake Registraion, False Information Updates, Updating the list of available voter. This feature of our component includes features such as Registraion of new User, Updation of Information in Existing Users,Validation of all the information provided etc.

- **Know your Candidate**: As the basic principle of democracy suggest people themselves select their representive, so as to help all the citizens to make a better and undertstood choice our app would provide some assistance in the form of this feature. Many of the times people cast their votes/ make their opinions by just listening to other people, News, and rumors which mahy or may not be true thus in helping to remove this ambiguity, we are providing with some fundamental things which we think would help a citizen to make a better decision namely,
    1. Details of him, which he had provided in nomination form.
    2. The promises he made for his consistuency.
    3. Past promises made and list of completed things(In case he/she is standing again).
    4. Past news and Present News and Criminal records.
   
- **Instant Results**: As the elections are going more transparent and easier we would propose to show elections results on the same day after the voting ends, as it would save a lot of time(3-4 days of EVM collection and 1 whole exclusive day for voting). Hence avoiding less chance of breaking security and usage of less man-power.

- **Grievence Readdresal Portal**: Since a democracy is based on satisfaction of its citizens, thus addresing their grievences is a major part. Understanding this basic problem we had provided an option for grievence readdresal in our DApp thus making it easier for all the citizens to complaint about any injustice that happend to them or any inconvinience they faced.

- **ews Portal**: One of the major Headache in the season of Election is to keep track of all the announcements,news etc all day, and Fake news adding more fuel in the Headache. Thus our DApp seems to provide a streamlined solution to this problem by providing news from all the major reputed Sources in one place thus helping all the voters to keep a hand at all the major announcements, manifestos, news from all aroung the country and helping them to choose their representative more carefully.
