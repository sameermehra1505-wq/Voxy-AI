from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Voxy Landing Page API")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class LeadFormData(BaseModel):
    name: str
    email: EmailStr
    company: str
    business_domain: str
    phone: str
    use_case: Optional[str] = ""


# In-memory storage for demo (mocked webhook)
leads_storage = []


@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "service": "voxy-landing-api"}


@app.post("/api/leads")
async def submit_lead(lead: LeadFormData):
    """
    Submit lead form data.
    Currently mocked - will be connected to n8n webhook later.
    """
    try:
        lead_data = lead.model_dump()
        leads_storage.append(lead_data)
        
        # TODO: Replace with actual n8n webhook call
        # webhook_url = os.environ.get("N8N_WEBHOOK_URL")
        # if webhook_url:
        #     async with httpx.AsyncClient() as client:
        #         await client.post(webhook_url, json=lead_data)
        
        return {
            "success": True,
            "message": "Thanks! Our AI will call you shortly."
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/leads")
async def get_leads():
    """Get all submitted leads (for testing purposes)"""
    return {"leads": leads_storage, "count": len(leads_storage)}
