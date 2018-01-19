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

### 2.2.A Creating certificates
### 2.2.B Managing documents

## 2.3 Certificates

## 2.4 Manager (user interface)
### 2.4.A Issuers
### 2.4.B People, companies, products
### 2.4.C Trust rank

## 2.5 Rite token
### 2.5.A Properties
### 2.5.B Distribution
### 2.5.C Dividends

## 2.6 Validator

# 3. Limitations
