"use client";

/**
 * 合同会社MUD-Ai - 請求書テンプレート
 *
 * 使用方法:
 * 1. React/Next.jsプロジェクトにこのファイルをコピー
 * 2. コンポーネントをインポートして使用
 * 3. 「PDF出力」ボタンでブラウザの印刷機能からPDF保存
 *
 * 依存: React 18+, TypeScript
 */

import { useState } from "react";

// ===== 型定義 =====

interface LineItem {
  id: number;
  description: string;
  quantity: number;
  unitPrice: number;
}

// ===== 会社情報（必要に応じて変更） =====

const COMPANY = {
  name: "合同会社MUD-Ai",
  zipCode: "〒___-____",
  address: "[登記住所]",
  tel: "[電話番号]",
  email: "info@mud-ai.com",
  website: "mud-ai.com",
  bank: {
    name: "[銀行名]",
    branch: "[支店名]",
    type: "普通",
    number: "[口座番号]",
    holder: "ゴウドウガイシャムダイ",
  },
};

const TAX_RATE = 0.1; // 消費税率 10%

// ===== スタイル定義 =====

const styles = {
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
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "32px",
    borderBottom: "3px solid #0A0A0A",
    paddingBottom: "16px",
  } as React.CSSProperties,
  title: {
    fontSize: "28px",
    fontWeight: "700",
    letterSpacing: "8px",
  } as React.CSSProperties,
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "32px",
    marginBottom: "32px",
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
  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    marginBottom: "24px",
  },
  th: {
    background: "#0A0A0A",
    color: "white",
    padding: "8px 12px",
    fontSize: "10px",
    fontWeight: "500",
    letterSpacing: "1px",
    textAlign: "left" as const,
  } as React.CSSProperties,
  td: {
    padding: "8px 12px",
    borderBottom: "1px solid #E5E7EB",
    fontSize: "12px",
  } as React.CSSProperties,
  tdRight: {
    padding: "8px 12px",
    borderBottom: "1px solid #E5E7EB",
    fontSize: "12px",
    textAlign: "right" as const,
  } as React.CSSProperties,
  totalSection: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "32px",
  } as React.CSSProperties,
  totalTable: {
    width: "280px",
  } as React.CSSProperties,
  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "6px 0",
    borderBottom: "1px solid #E5E7EB",
    fontSize: "12px",
  } as React.CSSProperties,
  grandTotal: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "3px solid #0A0A0A",
    fontSize: "16px",
    fontWeight: "700",
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
  button: {
    padding: "8px 20px",
    fontSize: "12px",
    cursor: "pointer",
    border: "none",
    fontFamily: "inherit",
  } as React.CSSProperties,
  noPrint: {
    marginBottom: "16px",
  } as React.CSSProperties,
};

// ===== コンポーネント =====

export default function InvoiceTemplate() {
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [issueDate, setIssueDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [dueDate, setDueDate] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [items, setItems] = useState<LineItem[]>([
    { id: 1, description: "", quantity: 1, unitPrice: 0 },
  ]);

  // 明細行の追加
  const addItem = () => {
    const newId = Math.max(...items.map((i) => i.id), 0) + 1;
    setItems([...items, { id: newId, description: "", quantity: 1, unitPrice: 0 }]);
  };

  // 明細行の削除
  const removeItem = (id: number) => {
    if (items.length <= 1) return;
    setItems(items.filter((item) => item.id !== id));
  };

  // 明細行の更新
  const updateItem = (id: number, field: keyof LineItem, value: string | number) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  // 金額計算
  const subtotal = items.reduce(
    (sum, item) => sum + item.quantity * item.unitPrice,
    0
  );
  const tax = Math.floor(subtotal * TAX_RATE);
  const total = subtotal + tax;

  const formatCurrency = (amount: number) =>
    `¥${amount.toLocaleString("ja-JP")}`;

  // PDF出力（ブラウザ印刷機能）
  const handlePrint = () => window.print();

  return (
    <>
      {/* 印刷時に非表示にするCSS */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { margin: 0; }
          @page { margin: 15mm; }
        }
      `}</style>

      {/* 操作ボタン */}
      <div className="no-print" style={{ ...styles.noPrint, display: "flex", gap: "8px", justifyContent: "flex-end", maxWidth: "210mm", margin: "16px auto" }}>
        <button
          onClick={handlePrint}
          style={{ ...styles.button, background: "#0A0A0A", color: "white" }}
        >
          PDF出力 / 印刷
        </button>
      </div>

      {/* 請求書本体 */}
      <div style={styles.page}>
        {/* ヘッダー */}
        <div style={styles.header}>
          <div style={styles.title}>請 求 書</div>
          <div style={{ textAlign: "right", fontSize: "11px" }}>
            <div style={styles.label}>請求書番号</div>
            <input
              style={{ ...styles.input, width: "160px", textAlign: "right" }}
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
              placeholder="INV-2026-001"
              className="no-print-border"
            />
            <div style={{ ...styles.label, marginTop: "8px" }}>発行日</div>
            <input
              type="date"
              style={{ ...styles.input, width: "160px", textAlign: "right" }}
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
            />
          </div>
        </div>

        {/* 宛先・差出人 */}
        <div style={styles.infoGrid}>
          {/* 宛先 */}
          <div>
            <div style={styles.label}>請求先</div>
            <input
              style={{ ...styles.input, fontSize: "16px", fontWeight: "700", marginBottom: "4px" }}
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="[クライアント名] 御中"
            />
            <textarea
              style={{ ...styles.input, height: "48px", resize: "vertical" }}
              value={clientAddress}
              onChange={(e) => setClientAddress(e.target.value)}
              placeholder="[住所]"
            />
          </div>

          {/* 差出人 */}
          <div style={{ textAlign: "right" }}>
            <div style={styles.label}>請求元</div>
            <div style={{ fontWeight: "700", fontSize: "14px", marginBottom: "4px" }}>
              {COMPANY.name}
            </div>
            <div style={{ fontSize: "11px", color: "#4B5563", lineHeight: "1.8" }}>
              {COMPANY.zipCode}
              <br />
              {COMPANY.address}
              <br />
              TEL: {COMPANY.tel}
              <br />
              {COMPANY.email}
            </div>
            {/* 印影 */}
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "8px" }}>
              <div style={styles.seal}>印影</div>
            </div>
          </div>
        </div>

        {/* 合計金額（目立つ表示） */}
        <div
          style={{
            background: "#F9FAFB",
            padding: "16px 24px",
            marginBottom: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderLeft: "4px solid #0A0A0A",
          }}
        >
          <span style={{ fontSize: "14px", fontWeight: "500" }}>
            ご請求金額（税込）
          </span>
          <span style={{ fontSize: "24px", fontWeight: "700" }}>
            {formatCurrency(total)}
          </span>
        </div>

        {/* お支払期限 */}
        <div style={{ marginBottom: "24px", display: "flex", gap: "16px", alignItems: "center" }}>
          <span style={{ ...styles.label, marginBottom: 0 }}>お支払期限</span>
          <input
            type="date"
            style={{ ...styles.input, width: "160px" }}
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>

        {/* 明細テーブル */}
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.th, width: "40px" }}>No.</th>
              <th style={styles.th}>品目・内容</th>
              <th style={{ ...styles.th, width: "80px", textAlign: "right" }}>数量</th>
              <th style={{ ...styles.th, width: "120px", textAlign: "right" }}>単価</th>
              <th style={{ ...styles.th, width: "120px", textAlign: "right" }}>金額</th>
              <th style={{ ...styles.th, width: "40px" }} className="no-print"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id}>
                <td style={styles.td}>{index + 1}</td>
                <td style={styles.td}>
                  <input
                    style={{ ...styles.input, border: "none", padding: "0" }}
                    value={item.description}
                    onChange={(e) => updateItem(item.id, "description", e.target.value)}
                    placeholder="品目を入力"
                  />
                </td>
                <td style={styles.tdRight}>
                  <input
                    type="number"
                    style={{ ...styles.input, border: "none", padding: "0", textAlign: "right", width: "60px" }}
                    value={item.quantity}
                    onChange={(e) => updateItem(item.id, "quantity", Number(e.target.value))}
                    min={1}
                  />
                </td>
                <td style={styles.tdRight}>
                  <input
                    type="number"
                    style={{ ...styles.input, border: "none", padding: "0", textAlign: "right", width: "100px" }}
                    value={item.unitPrice}
                    onChange={(e) => updateItem(item.id, "unitPrice", Number(e.target.value))}
                    min={0}
                  />
                </td>
                <td style={styles.tdRight}>
                  {formatCurrency(item.quantity * item.unitPrice)}
                </td>
                <td style={styles.td} className="no-print">
                  <button
                    onClick={() => removeItem(item.id)}
                    style={{ ...styles.button, background: "none", color: "#EF4444", padding: "2px 8px", fontSize: "14px" }}
                    disabled={items.length <= 1}
                  >
                    ×
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* 明細追加ボタン */}
        <div className="no-print" style={{ marginBottom: "24px" }}>
          <button
            onClick={addItem}
            style={{ ...styles.button, background: "#F3F4F6", color: "#374151" }}
          >
            + 明細を追加
          </button>
        </div>

        {/* 小計・消費税・合計 */}
        <div style={styles.totalSection}>
          <div style={styles.totalTable}>
            <div style={styles.totalRow}>
              <span>小計</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div style={styles.totalRow}>
              <span>消費税（10%）</span>
              <span>{formatCurrency(tax)}</span>
            </div>
            <div style={styles.grandTotal}>
              <span>合計</span>
              <span>{formatCurrency(total)}</span>
            </div>
          </div>
        </div>

        {/* 振込先情報 */}
        <div
          style={{
            background: "#F9FAFB",
            padding: "16px 24px",
            marginBottom: "24px",
            fontSize: "11px",
          }}
        >
          <div style={{ ...styles.label, marginBottom: "8px" }}>お振込先</div>
          <div>
            {COMPANY.bank.name} {COMPANY.bank.branch}（{COMPANY.bank.type}）
            {COMPANY.bank.number}
            <br />
            口座名義: {COMPANY.bank.holder}
          </div>
          <div style={{ marginTop: "4px", color: "#9CA3AF", fontSize: "10px" }}>
            ※ 振込手数料はお客様のご負担でお願いいたします。
          </div>
        </div>

        {/* 備考 */}
        <div>
          <div style={styles.label}>備考</div>
          <textarea
            style={{ ...styles.input, height: "60px", resize: "vertical" }}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="備考を入力（任意）"
          />
        </div>
      </div>
    </>
  );
}
