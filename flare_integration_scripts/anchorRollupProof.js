const fs = require('fs');
const path = require('path');

async function anchorRollupProof() {
  const rollupProof = JSON.parse(fs.readFileSync(
    path.join(__dirname, 'examples/rollup/rollup_001.json'), 'utf-8'
  ));

  console.log('✅ Rollup Proof ready:');
  console.log({
    proofID: rollupProof.proofID,
    proofHash: rollupProof.proofHash,
    ledger_id: rollupProof.ledger_id,
    rollup_id: rollupProof.leaves.block_id // using the block_id field as rollup_id
  });

  // 🚀 Here you would call Flare anchoring function
}

module.exports = { anchorRollupProof };
