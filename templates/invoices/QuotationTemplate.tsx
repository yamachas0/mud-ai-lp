"use client";

/**
 * 合同会社MUD-Ai - 見積書テンプレート
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

// ===== 会社情報 =====

const COMPANY = {
  name: "合同会社MUD-Ai",
  zipCode: "〒___-____",
  address: "[登記住所]",
  tel: "[電話番号]",
  email: "info@mud-ai.com",
};

const TAX_RATE = 0.1;

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

export default function QuotationTemplate() {
  const [quotationNumber, setQuotationNumber] = useState("");
  const [issueDate, setIssueDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [validUntil, setValidUntil] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [projectName, setProjectName] = useState("");
  const [notes, setNotes] = useState("");
  const [items, setItems] = useState<LineItem[]>([
    { id: 1, description: "", quantity: 1, unitPrice: 0 },
  ]);

  const addItem = () => {
    const newId = Math.max(...items.map((i) => i.id), 0) + 1;
    setItems([...items, { id: newId, description: "", quantity: 1, unitPrice: 0 }]);
  };

  const removeItem = (id: number) => {
    if (items.length <= 1) return;
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItem = (id: number, field: keyof LineItem, value: string | number) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  const tax = Math.floor(subtotal * TAX_RATE);
  const total = subtotal + tax;
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
        <div style={s.header}>
          <div style={s.title}>見 積 書</div>
          <div style={{ textAlign: "right", fontSize: "11px" }}>
            <div style={s.label}>見積番号</div>
            <input
              style={{ ...s.input, width: "160px", textAlign: "right" }}
              value={quotationNumber}
              onChange={(e) => setQuotationNumber(e.target.value)}
              placeholder="QT-2026-001"
            />
            <div style={{ ...s.label, marginTop: "8px" }}>発行日</div>
            <input
              type="date"
              style={{ ...s.input, width: "160px", textAlign: "right" }}
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
            />
          </div>
        </div>

        {/* 宛先・差出人 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginBottom: "32px" }}>
          <div>
            <div style={s.label}>お見積先</div>
            <input
              style={{ ...s.input, fontSize: "16px", fontWeight: "700", marginBottom: "4px" }}
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="[クライアント名] 御中"
            />
            <textarea
              style={{ ...s.input, height: "48px", resize: "vertical" }}
              value={clientAddress}
              onChange={(e) => setClientAddress(e.target.value)}
              placeholder="[住所]"
            />
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={s.label}>見積元</div>
            <div style={{ fontWeight: "700", fontSize: "14px", marginBottom: "4px" }}>
              {COMPANY.name}
            </div>
            <div style={{ fontSize: "11px", color: "#4B5563", lineHeight: "1.8" }}>
              {COMPANY.zipCode}<br />
              {COMPANY.address}<br />
              TEL: {COMPANY.tel}<br />
              {COMPANY.email}
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "8px" }}>
              <div style={s.seal}>印影</div>
            </div>
          </div>
        </div>

        {/* 合計金額 */}
        <div style={{ background: "#F9FAFB", padding: "16px 24px", marginBottom: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderLeft: "4px solid #0A0A0A" }}>
          <span style={{ fontSize: "14px", fontWeight: "500" }}>お見積金額（税込）</span>
          <span style={{ fontSize: "24px", fontWeight: "700" }}>{fmt(total)}</span>
        </div>

        {/* 件名・有効期限 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }}>
          <div>
            <div style={s.label}>件名</div>
            <input
              style={s.input}
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="プロジェクト名"
            />
          </div>
          <div>
            <div style={s.label}>見積有効期限</div>
            <input
              type="date"
              style={s.input}
              value={validUntil}
              onChange={(e) => setValidUntil(e.target.value)}
            />
          </div>
        </div>

        {/* 明細テーブル */}
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "24px" }}>
          <thead>
            <tr>
              <th style={{ ...s.th, width: "40px" }}>No.</th>
              <th style={s.th}>品目・内容</th>
              <th style={{ ...s.th, width: "80px", textAlign: "right" }}>数量</th>
              <th style={{ ...s.th, width: "120px", textAlign: "right" }}>単価</th>
              <th style={{ ...s.th, width: "120px", textAlign: "right" }}>金額</th>
              <th style={{ ...s.th, width: "40px" }} className="no-print"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id}>
                <td style={s.td}>{index + 1}</td>
                <td style={s.td}>
                  <input
                    style={{ ...s.input, border: "none", padding: "0" }}
                    value={item.description}
                    onChange={(e) => updateItem(item.id, "description", e.target.value)}
                    placeholder="品目を入力"
                  />
                </td>
                <td style={s.tdRight}>
                  <input
                    type="number"
                    style={{ ...s.input, border: "none", padding: "0", textAlign: "right", width: "60px" }}
                    value={item.quantity}
                    onChange={(e) => updateItem(item.id, "quantity", Number(e.target.value))}
                    min={1}
                  />
                </td>
                <td style={s.tdRight}>
                  <input
                    type="number"
                    style={{ ...s.input, border: "none", padding: "0", textAlign: "right", width: "100px" }}
                    value={item.unitPrice}
                    onChange={(e) => updateItem(item.id, "unitPrice", Number(e.target.value))}
                    min={0}
                  />
                </td>
                <td style={s.tdRight}>{fmt(item.quantity * item.unitPrice)}</td>
                <td style={s.td} className="no-print">
                  <button
                    onClick={() => removeItem(item.id)}
                    style={{ ...s.btn, background: "none", color: "#EF4444", padding: "2px 8px", fontSize: "14px" }}
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
            style={{ ...s.btn, background: "#F3F4F6", color: "#374151" }}
          >
            + 明細を追加
          </button>
        </div>

        {/* 小計・消費税・合計 */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "32px" }}>
          <div style={{ width: "280px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #E5E7EB", fontSize: "12px" }}>
              <span>小計</span><span>{fmt(subtotal)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #E5E7EB", fontSize: "12px" }}>
              <span>消費税（10%）</span><span>{fmt(tax)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "3px solid #0A0A0A", fontSize: "16px", fontWeight: "700" }}>
              <span>合計</span><span>{fmt(total)}</span>
            </div>
          </div>
        </div>

        {/* 備考 */}
        <div>
          <div style={s.label}>備考・特記事項</div>
          <textarea
            style={{ ...s.input, height: "80px", resize: "vertical" }}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="納期、支払条件、その他特記事項を入力"
          />
        </div>
      </div>
    </>
  );
}
