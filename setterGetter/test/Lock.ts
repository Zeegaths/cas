import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Setter Getter", function () { 
  async function deploySetterGetter() {    
    

    const SetterGetter = await ethers.getContractFactory("SetterGetter");
    const setterGetter = await SetterGetter.deploy();

    return { setterGetter };
  }

  describe("setting and getting", function () {
    it("Should set and get the name", async function () {
      const { setterGetter } = await loadFixture(deploySetterGetter);
     
      const tx = await setterGetter.setName("mary");
      const name = await setterGetter.getName();

      expect(name).to.equal("mary");
    });  
  });
});
