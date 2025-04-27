/**
 * Example Flare Anchoring Script
 * 
 * This shows how you would anchor a proofHash to the Flare blockchain using Web3.js and environment variables (.env).
 * 
 * ⚠️ WARNING: This is an example only.
 * Always keep your private keys secured and never commit .env files to GitHub!
 */

require('dotenv').config(); // Load environment variables from .env file
const Web3 = require('web3');

// Load Flare RPC URL and Private Key from environment
const FLARE_RPC = process.env.FLARE_RPC;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

// Sanity checks
if (!FLARE_RPC || !PRIVATE_KEY) {
  console.error('❌ Error: FLARE_RPC or PRIVATE_KEY not set in .env file.');
  process.exit(1);
}

async function anchorProofToFlare(proofHash) {
  try {
    const web3 = new Web3(FLARE_RPC);

    // Setup your account securely
    const account = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);
    web3.eth.accounts.wallet.add(account);
    web3.eth.defaultAccount = account.address;

    console.log('🔗 Preparing transaction to Flare...');
    
    // Build the transaction
    const tx = {
      from: account.address,
      to: account.address, // Or set your contract address if anchoring via a contract
      value: "0",           // No funds transferred, just anchoring
      data: web3.utils.toHex(proofHash),
      gas: 100000
    };

    // Send the transaction
    const receipt = await web3.eth.sendTransaction(tx);
    console.log('✅ Proof anchored successfully on Flare!');
    console.log('TX Hash:', receipt.transactionHash);
  } catch (error) {
    console.error('❌ Error anchoring proof to Flare:', error.message);
  }
}

// Example usage
const exampleProofHash = '0x5e11b7762d25572521288d6d60878339d71f5cb987beb01ad0c19525b329a456'; // Replace with real proofHash
anchorProofToFlare(exampleProofHash);

// Export function if needed
module.exports = { anchorProofToFlare };
