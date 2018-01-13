pragma solidity ^0.4.18;

import "zeppelin-solidity/contracts/ownership/Contactable.sol";



contract OrganizationManagement is Contactable {
    function createOrganization(address owner, string data) public onlyOwner {

    }

    function freezeOrganization(address organization) public onlyOwner {

    }

    function unfreezeOrganization(address organization) public onlyOwner {

    }

    function transferOrganizationOwnership(address organization, address newOwner) public  onlyOwner {

    }

    function modifyOrganizationData(address organization, string data) public  onlyOwner {

    }
}
