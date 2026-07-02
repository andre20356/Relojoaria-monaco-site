'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Product, CollectionBase } from '@/lib/data'
import { salvarProdutoAction } from './actions'

const inputStyle = {
  backgroundColor: '#1E1C19',
  border: '1px solid #2E2C28',
  color: '#F0EDE5',
}

const labelClass = 'block text-xs tracking-wider uppercase mb-2'
const labelStyle = { color: '#8A8780' }

function Campo({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label className={labelClass} style={labelStyle}>
        {label}
      </label>
      {children}
    </div>
  )
}

export default function AdminProductForm({
  produto,
  colecoes,
}: {
  produto?: Product
  colecoes: CollectionBase[]
}) {
  const [imagensExistentes, setImagensExistentes] = useState<string[]>(
    produto?.images || []
  )
  const [novasImagens, setNovasImagens] = useState<File[]>([])

  const removerImagemExistente = (img: string) => {
    setImagensExistentes((prev) => prev.filter((i) => i !== img))
  }

  const handleNovosArquivos = (e: React.ChangeEvent<HTMLInputElement>) => {
    const arquivos = Array.from(e.target.files || [])
    setNovasImagens(arquivos)
  }

  return (
    <form
      action={salvarProdutoAction}
      className="flex flex-col gap-6"
      encType="multipart/form-data"
    >
      {produto && (
        <input type="hidden" name="slugOriginal" value={produto.slug} />
      )}

      {/* Imagens */}
      <div
        className="p-5"
        style={{ border: '1px solid #2E2C28', backgroundColor: '#0D0C0A' }}
      >
        <p className="text-xs tracking-wider uppercase mb-4" style={labelStyle}>
          Fotos do relógio
        </p>

        {imagensExistentes.length > 0 && (
          <div className="grid grid-cols-4 gap-3 mb-4">
            {imagensExistentes.map((img) => (
              <div key={img} className="relative" style={{ aspectRatio: '1/1' }}>
                <Image
                  src={img}
                  alt="Imagem do produto"
                  fill
                  sizes="150px"
                  style={{ objectFit: 'cover' }}
                />
                <input type="hidden" name="imagensExistentes" value={img} />
                <button
                  type="button"
                  onClick={() => removerImagemExistente(img)}
                  className="absolute top-1 right-1 text-xs px-1.5"
                  style={{ backgroundColor: 'rgba(7,7,6,0.85)', color: '#C8574A' }}
                >
                  remover
                </button>
              </div>
            ))}
          </div>
        )}

        <input
          type="file"
          name="imagens"
          accept="image/*"
          multiple
          onChange={handleNovosArquivos}
          className="w-full text-sm"
          style={{ color: '#8A8780' }}
        />
        {novasImagens.length > 0 && (
          <p className="text-xs mt-2" style={{ color: '#D4AE5C' }}>
            {novasImagens.length} nova(s) imagem(ns) selecionada(s)
          </p>
        )}
        <p className="text-xs mt-2" style={{ color: '#545250' }}>
          Envie várias fotos do mesmo relógio (frente, lateral, mostrador,
          fecho). A primeira vira a foto principal.
        </p>
      </div>

      {/* Dados básicos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Campo label="Nome do modelo *">
          <input
            type="text"
            name="name"
            required
            defaultValue={produto?.name}
            placeholder="Ex: Seamaster 300"
            className="w-full px-4 py-3 text-sm"
            style={inputStyle}
          />
        </Campo>
        <Campo label="Marca *">
          <input
            type="text"
            name="brand"
            required
            defaultValue={produto?.brand}
            placeholder="Ex: Omega"
            className="w-full px-4 py-3 text-sm"
            style={inputStyle}
          />
        </Campo>
        <Campo label="Preço (R$) *">
          <input
            type="number"
            name="price"
            step="0.01"
            required
            defaultValue={produto?.price}
            className="w-full px-4 py-3 text-sm"
            style={inputStyle}
          />
        </Campo>
        <Campo label="Preço original (se estiver com desconto)">
          <input
            type="number"
            name="originalPrice"
            step="0.01"
            defaultValue={produto?.originalPrice}
            className="w-full px-4 py-3 text-sm"
            style={inputStyle}
          />
        </Campo>
        <Campo label="Categoria (texto livre) *">
          <input
            type="text"
            name="category"
            required
            defaultValue={produto?.category}
            placeholder="Ex: Clássico, Mergulho, Esportivo..."
            className="w-full px-4 py-3 text-sm"
            style={inputStyle}
          />
        </Campo>
        <Campo label="Coleção *">
          <select
            name="collection"
            required
            defaultValue={produto?.collection}
            className="w-full px-4 py-3 text-sm"
            style={inputStyle}
          >
            <option value="">Selecione...</option>
            {colecoes.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </Campo>
        <Campo label="Selo (opcional)">
          <select
            name="badge"
            defaultValue={produto?.badge || ''}
            className="w-full px-4 py-3 text-sm"
            style={inputStyle}
          >
            <option value="">Nenhum</option>
            <option value="Novo">Novo</option>
            <option value="Exclusivo">Exclusivo</option>
            <option value="Edição Limitada">Edição Limitada</option>
          </select>
        </Campo>
        <Campo label="Avaliação (0 a 5)">
          <input
            type="number"
            name="rating"
            min="0"
            max="5"
            step="0.1"
            defaultValue={produto?.rating ?? 5}
            className="w-full px-4 py-3 text-sm"
            style={inputStyle}
          />
        </Campo>
        <Campo label="Nº de avaliações">
          <input
            type="number"
            name="reviews"
            min="0"
            defaultValue={produto?.reviews ?? 0}
            className="w-full px-4 py-3 text-sm"
            style={inputStyle}
          />
        </Campo>
      </div>

      <Campo label="Descrição *">
        <textarea
          name="description"
          required
          rows={4}
          defaultValue={produto?.description}
          placeholder="Conte a história do relógio, o que o torna especial..."
          className="w-full px-4 py-3 text-sm"
          style={inputStyle}
        />
      </Campo>

      <div className="flex items-center gap-6">
        <label className="flex items-center gap-2 text-sm" style={{ color: '#C8C4BC' }}>
          <input
            type="checkbox"
            name="inStock"
            defaultChecked={produto?.inStock ?? true}
          />
          Em estoque
        </label>
        <label className="flex items-center gap-2 text-sm" style={{ color: '#C8C4BC' }}>
          <input
            type="checkbox"
            name="featured"
            defaultChecked={produto?.featured ?? false}
          />
          Destacar na home
        </label>
      </div>

      {/* Especificações técnicas */}
      <div
        className="p-5"
        style={{ border: '1px solid #2E2C28', backgroundColor: '#0D0C0A' }}
      >
        <p className="text-xs tracking-wider uppercase mb-4" style={labelStyle}>
          Especificações técnicas (opcional, pode preencher depois)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Campo label="Movimento">
            <input
              type="text"
              name="spec_movement"
              defaultValue={produto?.specs?.movement}
              placeholder="Ex: Automático, calibre X, reserva 70h"
              className="w-full px-4 py-3 text-sm"
              style={inputStyle}
            />
          </Campo>
          <Campo label="Caixa">
            <input
              type="text"
              name="spec_case"
              defaultValue={produto?.specs?.case}
              placeholder="Ex: Aço inoxidável, 41mm"
              className="w-full px-4 py-3 text-sm"
              style={inputStyle}
            />
          </Campo>
          <Campo label="Mostrador">
            <input
              type="text"
              name="spec_dial"
              defaultValue={produto?.specs?.dial}
              className="w-full px-4 py-3 text-sm"
              style={inputStyle}
            />
          </Campo>
          <Campo label="Pulseira / Bracelete">
            <input
              type="text"
              name="spec_bracelet"
              defaultValue={produto?.specs?.bracelet}
              className="w-full px-4 py-3 text-sm"
              style={inputStyle}
            />
          </Campo>
          <Campo label="Resistência à água">
            <input
              type="text"
              name="spec_water_resistance"
              defaultValue={produto?.specs?.water_resistance}
              placeholder="Ex: 100 metros (10 ATM)"
              className="w-full px-4 py-3 text-sm"
              style={inputStyle}
            />
          </Campo>
          <Campo label="Funções">
            <input
              type="text"
              name="spec_functions"
              defaultValue={produto?.specs?.functions}
              placeholder="Ex: Horas, minutos, segundos, data"
              className="w-full px-4 py-3 text-sm"
              style={inputStyle}
            />
          </Campo>
        </div>
      </div>

      <button type="submit" className="btn-primary self-start">
        {produto ? 'Salvar alterações' : 'Cadastrar produto'}
      </button>
    </form>
  )
}
