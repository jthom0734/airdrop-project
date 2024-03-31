import { ethers } from "ethers";
import Web3Modal from "web3modal";

//INTERNAL IMPORT
import airdrop from "./airdrop.json";
import iphone from "./iphone.json";

//TOKEN SET IPHONE: 0x70211C060c2E03Bda94C73d0e55d3DE1F6aBE311
//TEST TBC: 0x48Af615f1B95aA7CB7a84aA6CbA24Db89f38073E

//AIRDROP
// export const airdrop_ADDRESS = "0xE8aEd434A01eccc1c575d7cC383EAFE226521D54";
export const airdrop_ADDRESS = "0xA493FC1c7bE229Da483D80dD447c6B6647535552";
const airdrop_ABI = airdrop.abi;

//IPHONE
export const iphone_ADDRESS = "0x70211C060c2E03Bda94C73d0e55d3DE1F6aBE311";

const iphone_ABI = iphone.abi;

const fetchContract = (signer, ABI, ADDRESS) =>
  new ethers.Contract(ADDRESS, ABI, signer);

export const web3Provider = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    return provider;
  } catch (error) {
    console.log(error);
  }
};

export const AirdropContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    const contract = fetchContract(provider, airdrop_ABI, airdrop_ADDRESS);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

export const IphoneContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    const contract = fetchContract(provider, iphone_ABI, iphone_ADDRESS);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

export const getBalance = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    return await signer.getBalance();
  } catch (error) {
    console.log(error);
  }
};
