const fs = require('fs');
const path = require('path');

async function anchorMemoProof() {
  const memoProof = JSON.parse(fs.readFileSync(
    path.join(__dirname, 'examples/memos/risk_memo.json'), 'utf-8'
  ));

  console.log('✅ Memo Proof ready:');
  console.log({
    proofID: memoProof.proofID,
    proofHash: memoProof.proofHash,
    ledger_id: memoProof.ledger_id,
    memo_id: memoProof.memo_id
  });

  // Simulate Flare anchoring here
}

module.exports = { anchorMemoProof };

