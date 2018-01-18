tak# Abstract

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

## 2.1 Supervisor

# ...
## I.1 Approval process
## I.2 Organization capabilities
# J. Certificate Authorities
## J.1 Creating certificates
## J.2 Managing documents
# K. Certificates
# M. Manager
## M.1 Issuers
## M.2 People or companies
## M.3 Trust rank
# N. Rite token
## N.1 Properties
## N.2 Distribution
## N.3 Dividends
# O. Validator
# P. Limitations
