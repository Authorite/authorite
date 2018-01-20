# Abstract

# 1. Introduction and proposal of value

Certificates issued by organizations all over the world to companies or persons are always matter of trust. While these should serve as, for example, endorsement of mastering a skill, completion of academic program or quality assurance, it is not always possible to determine whether:
1. issued certificate is genuine,
2. certificate authority is influential,
3. specific person owns particular certificate.

Some authorities allow to validate a person or business holds given certificate. It is partial solution, because it is neither scalable nor all institutions allow such verification making it complicated to check specific entity being subject of such document.

With current state of technology it is often easy to counterfeit a cerificate, be it via photo manipulation or injection of data into existing serivce. Every accreditation bases on trust between parties. Next, it takes time to verify subject across spread databases holding certificate data.

To overcome these threats there is a need for an organization monitoring certification authorities. Any centralized supervisor would suffer from trust based model. However, with rise of blockchain technology, smart contracts and decentralized autonomous organizations, it is possible to build transparent system that is not based on trust.

This paper presents a solution, certification monitoring system minimizing trust issues accompanying current state of certifications. The system is:
- **transparent** - data is easily accessible,
- **secure** - protected by cryptographic proof,
- **practical** - enhances utility of certificates,
- **decentralized** - built on top of smart contracts.

# 2. System design

Authorite is simple yet powerful platform which core functionalities are built around blockchain. Early versions are meant to run on Ethereum blockchain. At the time of writing this paper, it is the most matured smart contract platform, the fastest way to build minimal viable product.
Base of the system consists 4 core entities built on blockchain, user interface, verification methods for authority registration and ranking.

Components are as follows:
- **Supervisor** - a contract for administrating certificate issuers,
- **Authority** - certificate issuer registered which positively completed supervisor's verification process; able to issue or revoke its own certificates,
- **Certificate** - smart contracts holding data of a document and its recipient (Ethereum address); allows to verify whether entity is rightful owner,
- **Manager** - interface between blockchain and end-user; simplifies exploration and issuance,
- **Ranking** - subsystem for scoring certificates and authorities, calculating impact and quality factor of entities,
- **Verificator** - set of methods and guidelines to validate authority; it is meant to be manual at first, advancing into automated registration process,
- **Rite token** - crypto token for transactions within the platform

> DIAGRAM HERE



## 2.1 Supervisor

It is smart contract responsible for administrating certificate authorities. At first, supervisor will be governed by creator of Authorite. Later on, when development process is complete and system will allow to automatically accept or revoke new organizations, it will be transformed into decentralized autonomous organization (DAO).
This contract manages issuers and not certificates themselves.

### 2.1.A Approval process
Process of verifying certificate authorities is based on a SSL certificate and website owned by authority.  
In order to create new authority:
1. Declarant opens new case by filling the form and paying application fee (if needed),
2. Administrator reviews the application and, if there are more verification proofs needed, asks declarant to provide needed proofs,
3. When ownership of a website is undoubtedly proven, new authority is created. Otherwise, no new authority is created.

### 2.1.B Supervisor capabilities
Governor can:
* Create new certificate authorities,
* Freeze/unfreeze existing authorities,
* Transfer ownership of an authority,
* Update organization's data,
* Verify authorities (by their SSL certificate; not present at the beginning).

## 2.2 Certificate Authorities
It is contract containing issuers' data. Managed by supervisor contract holds methods for issuing and revoking certificates. Authority can administer only their own documents.

Authority contract holds following data:
* owner (organization's address)
* supervisor's address
* organization's website address
* status (active/frozen)
* list of certificates
* (later on) trust score

### 2.2.A Creating certificates
Issuer can create certificate contract by calling specific method in authority contract, providing needed data and paying for the transaction. Result is certificate contract with owner set to issuer address.

### 2.2.B Managing documents
Authority holds ability to create, modify and delete its certificates, together with whom are these issued to.

## 2.3 Certificates
Each certificate is separate contract holding data, list of entities it is issued to and methods for issuing/revoking document to an address (person, company or product).
Additionally, it allows to easily check if given address is holder of certificate.  

Certificates hold following data:
* owner (Certificate Authority contract address)
* name of document
* (optional) description of document
* subjects of certificate

## 2.4 Manager (user interface)
It is web app integrated with blockchain. It uses MetaMask or similar technology to act as interface between smart contracts and end user. This app makes it easy for non-technical people to use the whole system, thus increasing adoption of technology.
Using this interface users can explore certificates, authorities or subjects of certification using either email or wallet address to search for specific person. Later on, the system will include trust rank, indicating how legitimate an entity is.
Apart from exploring the certificates, system exposes functionality of methods of Certificate Authority and Certificate contracts.

### 2.4.A Issuers
A dashboard for certificate authority. Allows to create new authority, edit its' owner and, what's more important, create new and manage existing certificates and their subjects.

### 2.4.B Certificates, people, companies, products
Explorer to search for entities present on the system. Together with filters, it allows to easily find and verify someone or something.

### 2.4.C Trust rank
Rank assigned to each individual entity, be it authority, certificate or subject of certification. It will be present in later versions of platform, as it's not yet determined whether the system will be internally developed or will be an external service.

## 2.5 RITE token
RITE is a crypto token being official currency of the platform. It's separate token and not any existing one to simplify transactions among the system and increase its portability. If there is better blockchain than Ethereum it would be easy to move with RITE token, finding and compensating all holders of this token within the new blockchain, meaning basically upgrading the system instead of building it from scratch.

### 2.5.A Properties
RITE is ERC20 token with inflation 8% per year in first 3 year. Initially, 1 000 000 will be minted. After each dividends are distributed, next batch will be minted (2% of supply at the beginning of the year). There will be 4 batches each year, summing up to 8% increase per year. All newly minted coins will be spend on development of the platform.

### 2.5.B Distribution
Tokens will be distributed as follows:
* 20% of initial supply will be spend on marketing (airdrop, rewards, bonuses),
* 15% will be sold (via ICO or regular sale, to be determined yet),
* 10% (plus amount of tokens minted per year) will be spent on development,
* 55% will be held by creator, locked at first. 5/55 will be unlocked every 2 months.  

### 2.5.C Dividends
All profits gained from Authorite will be distributed amongst the shareholders. Shareholder is anyone holding any amount of RITE. Distribution will be proportional to the owned tokens. At the end of each quarter, system will calculate and set dividend as claimable. Tokens not distributed/ claimed will return into pool and be redistributed in next distribution process.

## 2.6 Validator
It is functionality of autonomous validation of new and existing certificate authorities. It will be based on website address and SSL certificate, which holds easily accessible identification data. Validator will check both website's owner and SSL certificate issuer to verify whether certificate can be trusted and accepted automatically. Next, it will pull data of certificate.

Validator is last requirement needed to transform Authorite into Decentralized Autonomous Organization.

# 3. Limitations
Platform is designed to promote high quality and useful certificates, however it will not replace common sense. It is meant to help in evaluation of given organization not to shift responsibility of thinking before cooperating with any entity inside the system. While system will try to hunt down and freeze dishonest issuers, it is possible that some of these will not be frozent upfront.
It might be possible to create similar named organization. Best practice is to always verify issuer, besides trust rank.
