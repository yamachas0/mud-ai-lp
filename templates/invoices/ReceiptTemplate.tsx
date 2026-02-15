"use client";

/**
 * 合同会社MUD-Ai - 領収書テンプレート
 *
 * 使用方法:
 * 1. React/Next.jsプロジェクトにこのファイルをコピー
 * 2. コンポーネントをインポートして使用
 * 3. 「PDF出力」ボタンでブラウザの印刷機能からPDF保存
 *
 * 依存: React 18+, TypeScript
 */

import { useState } from "react";

// ===== 会社情報 =====

const COMPANY = {
  name: "合同会社MUD-Ai",
  zipCode: "〒___-____",
  address: "[登記住所]",
  tel: "[電話番号]",
  email: "info@mudaisuki.com",
};

// ===== スタイル =====

const s = {
  page: {
    fontFamily: "'Noto Sans JP', 'Helvetica Neue', Arial, sans-serif",
    maxWidth: "210mm",
    margin: "0 auto",
    padding: "20mm",
    fontSize: "12px",
    color: "#0A0A0A",
    lineHeight: "1.6",
    background: "white",
  } as React.CSSProperties,
  label: {
    fontSize: "10px",
    color: "#6B7280",
    marginBottom: "4px",
    letterSpacing: "1px",
  } as React.CSSProperties,
  input: {
    width: "100%",
    padding: "6px 8px",
    border: "1px solid #E5E7EB",
    fontSize: "12px",
    fontFamily: "inherit",
    outline: "none",
  } as React.CSSProperties,
  btn: {
    padding: "8px 20px",
    fontSize: "12px",
    cursor: "pointer",
    border: "none",
    fontFamily: "inherit",
  } as React.CSSProperties,
  seal: {
    width: "80px",
    height: "80px",
    border: "2px dashed #D1D5DB",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
    color: "#9CA3AF",
  } as React.CSSProperties,
};

// ===== コンポーネント =====

export default function ReceiptTemplate() {
  const [receiptNumber, setReceiptNumber] = useState("");
  const [issueDate, setIssueDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [clientName, setClientName] = useState("");
  const [amount, setAmount] = useState(0);
  const [taxIncluded, setTaxIncluded] = useState(true);
  const [description, setDescription] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("銀行振込");

  // 税込み金額の場合の内税計算
  const taxAmount = taxIncluded ? Math.floor(amount - amount / 1.1) : Math.floor(amount * 0.1);
  const totalAmount = taxIncluded ? amount : amount + taxAmount;

  const fmt = (n: number) => `¥${n.toLocaleString("ja-JP")}`;

  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { margin: 0; }
          @page { margin: 15mm; }
        }
      `}</style>

      {/* 操作ボタン */}
      <div className="no-print" style={{ display: "flex", gap: "8px", justifyContent: "flex-end", maxWidth: "210mm", margin: "16px auto" }}>
        <button
          onClick={() => window.print()}
          style={{ ...s.btn, background: "#0A0A0A", color: "white" }}
        >
          PDF出力 / 印刷
        </button>
      </div>

      <div style={s.page}>
        {/* ヘッダー */}
        <div style={{ textAlign: "center", marginBottom: "40px", borderBottom: "3px solid #0A0A0A", paddingBottom: "16px" }}>
          <div style={{ fontSize: "32px", fontWeight: "700", letterSpacing: "16px" }}>
            領 収 書
          </div>
        </div>

        {/* 番号・日付（右上） */}
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "24px", marginBottom: "32px", fontSize: "11px" }}>
          <div>
            <span style={s.label}>No. </span>
            <input
              style={{ ...s.input, width: "140px", textAlign: "right" }}
              value={receiptNumber}
              onChange={(e) => setReceiptNumber(e.target.value)}
              placeholder="RC-2026-001"
            />
          </div>
          <div>
            <span style={s.label}>発行日 </span>
            <input
              type="date"
              style={{ ...s.input, width: "140px", textAlign: "right" }}
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
            />
          </div>
        </div>

        {/* 宛名 */}
        <div style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "8px", borderBottom: "1px solid #0A0A0A", paddingBottom: "8px" }}>
            <input
              style={{ ...s.input, fontSize: "20px", fontWeight: "700", border: "none", padding: "0", flex: 1 }}
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="[クライアント名]"
            />
            <span style={{ fontSize: "14px", whiteSpace: "nowrap" }}>様</span>
          </div>
        </div>

        {/* 金額 */}
        <div style={{ background: "#F9FAFB", padding: "24px 32px", marginBottom: "32px", textAlign: "center", border: "2px solid #0A0A0A" }}>
          <div style={{ fontSize: "14px", marginBottom: "8px", color: "#6B7280" }}>
            金額
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
            <span style={{ fontSize: "14px" }}>¥</span>
            <input
              type="number"
              style={{ ...s.input, fontSize: "32px", fontWeight: "700", border: "none", background: "transparent", textAlign: "center", width: "300px", padding: "0" }}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              min={0}
            />
            <span style={{ fontSize: "14px" }}>-</span>
          </div>
          <div style={{ fontSize: "11px", color: "#6B7280", marginTop: "8px" }}>
            （うち消費税等 {fmt(taxAmount)}）
          </div>
        </div>

        {/* 税込/税別 切り替え */}
        <div className="no-print" style={{ marginBottom: "16px", display: "flex", gap: "16px", alignItems: "center" }}>
          <label style={{ fontSize: "12px", cursor: "pointer" }}>
            <input
              type="radio"
              checked={taxIncluded}
              onChange={() => setTaxIncluded(true)}
              style={{ marginRight: "4px" }}
            />
            税込金額
          </label>
          <label style={{ fontSize: "12px", cursor: "pointer" }}>
            <input
              type="radio"
              checked={!taxIncluded}
              onChange={() => setTaxIncluded(false)}
              style={{ marginRight: "4px" }}
            />
            税別金額
          </label>
        </div>

        {/* 但し書き */}
        <div style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
            <span style={{ fontSize: "12px", whiteSpace: "nowrap" }}>但し</span>
            <input
              style={{ ...s.input, borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: 0, flex: 1 }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="[但し書きを入力]"
            />
            <span style={{ fontSize: "12px", whiteSpace: "nowrap" }}>として</span>
          </div>
        </div>

        {/* 支払方法 */}
        <div style={{ marginBottom: "40px" }}>
          <div style={s.label}>お支払方法</div>
          <select
            style={{ ...s.input, width: "200px" }}
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option>銀行振込</option>
            <option>現金</option>
            <option>クレジットカード</option>
            <option>その他</option>
          </select>
        </div>

        {/* 注記 */}
        <div style={{ fontSize: "11px", color: "#6B7280", marginBottom: "40px" }}>
          上記の金額、正に領収いたしました。
        </div>

        {/* 発行者情報 */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontWeight: "700", fontSize: "14px", marginBottom: "4px" }}>
              {COMPANY.name}
            </div>
            <div style={{ fontSize: "11px", color: "#4B5563", lineHeight: "1.8" }}>
              {COMPANY.zipCode}<br />
              {COMPANY.address}<br />
              TEL: {COMPANY.tel}
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "12px" }}>
              <div style={s.seal}>印影</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
