
# RAG + SLM Study & Implementation Roadmap (6GB GPU Setup)

---

## Objective
Build a stable Retrieval-Augmented Generation (RAG) ML app using a small language model on a 6GB laptop GPU, with proper GPU protection, user control, and production-ready architecture.

---

# 1. Core Tech Stack to Learn

## Programming & ML
- Python
- PyTorch
- HuggingFace Transformers OR llama.cpp
- Model quantization (bitsandbytes / GGUF)

## RAG Components
- sentence-transformers (embeddings)
- FAISS or ChromaDB (vector database)
- Prompt engineering

## Backend
- FastAPI
- JWT authentication
- Rate limiting

## Infrastructure
- Redis
- Celery / RQ (job queue)
- Docker
- Nginx (already configured)

## GPU Management
- nvidia-smi
- pynvml
- VRAM monitoring

---

# 2. Models to Use

## SLM (Start Here)
- Phi-2 (primary)
- Phi-3 Mini (upgrade)

## Embedding Models (CPU only)
- all-MiniLM-L6-v2
- bge-small-en
- e5-small

## Vector Database
- FAISS (recommended)
- ChromaDB (optional)

---

# 3. Implementation Phases

---

## Phase 1 — Run Model Locally
Goal: Verify GPU inference works.

Tasks:
- Load Phi-2
- Run prompt
- Generate response

Output:
```

Prompt → Model → Response

```

---

## Phase 2 — Build Embedding Pipeline
Goal: Enable retrieval.

Tasks:
- Load embedding model
- Convert documents → vectors
- Store in FAISS

Output:
```

Text → Embedding → Vector storage

```

---

## Phase 3 — Implement Retrieval
Goal: Get relevant context.

Tasks:
- Query embedding
- Search FAISS
- Return top-k results

Output:
```

Question → Similar document chunks

```

---

## Phase 4 — Build RAG Flow
Goal: Combine retrieval + model.

Tasks:
- Retrieve context
- Construct prompt
- Send to SLM

Pipeline:
```

User query
→ retrieve documents
→ build prompt
→ SLM
→ answer

```

---

## Phase 5 — API Layer
Goal: Make system usable.

Build FastAPI endpoints:

```

POST /query
POST /upload-doc
GET /health

```

---

## Phase 6 — GPU Protection Layer
Goal: Prevent crashes.

Implement:

- Redis queue
- Single GPU worker
- Concurrency = 1–2 max
- VRAM monitoring

Pipeline:
```

API → Queue → Worker → GPU

```

---

## Phase 7 — User Restriction
Goal: Prevent abuse.

Implement:

- JWT login
- Rate limits
- Query quotas

Example:

| User | Limit |
|------|------|
| Free | 10/day |
| Pro | 100/day |

---

## Phase 8 — Deployment
Goal: Production-ready structure.

Stack:

```

Internet
↓
Nginx
↓
FastAPI
↓
Redis Queue
↓
GPU Worker
↓
SLM

```

Deploy via:
- Docker containers
- Reverse proxy routing

---

# 4. GPU Usage Rules (Critical)

- Only ONE model loaded
- Embeddings run on CPU
- Worker concurrency ≤ 2
- Always keep 1–1.5 GB VRAM free
- Queue all jobs

Never:
- run model inside API thread
- allow parallel raw GPU calls
- load multiple heavy models

---

# 5. Skills to Build

- Prompt engineering for RAG
- Async Python
- API design
- GPU debugging
- Quantization
- Queue architecture

---

# 6. Common Failure Points

| Mistake | Result |
|---|---|
| No queue | GPU crash |
| Running 7B models first | OOM |
| Embeddings on GPU | wasted VRAM |
| Multiple model instances | instability |
| No rate limit | overload |

---

# 7. Final Build Order

1. Run Phi-2 locally
2. Add embeddings
3. Implement FAISS
4. Connect RAG pipeline
5. Build FastAPI API
6. Add Redis queue
7. Add user limits
8. Deploy via Docker + Nginx

Do NOT change this order.

Skipping layers = debugging chaos.

---

# 8. Next Decision Required

Choose implementation base:

A) HuggingFace + PyTorch  
B) llama.cpp  
C) LangChain  
D) LlamaIndex  

This determines:
- performance
- code complexity
- GPU usage
- architecture decisions
