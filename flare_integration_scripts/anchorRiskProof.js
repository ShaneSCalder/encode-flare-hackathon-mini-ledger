const path = require('path');
const { anchorMemoProof } = require('./anchorRiskProof_memo');
const { anchorBlockProof } = require('./anchorRiskProof_block');

async function anchorRiskProofController() {
  console.log('🛡 Starting Risk Proof Anchoring Process...');

  try {
    console.log('🔹 Anchoring Memo Proof...');
    await anchorMemoProof();

    console.log('🔹 Anchoring Block Proof...');
    await anchorBlockProof();

    console.log('✅ All proofs anchored successfully (simulated).');
  } catch (error) {
    console.error('❌ Error during anchoring process:', error.message);
  }
}

// Execute controller
anchorRiskProofController();
