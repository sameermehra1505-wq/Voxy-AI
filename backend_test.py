import requests
import sys
from datetime import datetime

class VoxyAPITester:
    def __init__(self, base_url="https://666febef-409f-4b29-87c6-24d378b5076f.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {response_data}")
                    return True, response_data
                except:
                    return True, {}
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text}")
                self.failed_tests.append({
                    "test": name,
                    "expected": expected_status,
                    "actual": response.status_code,
                    "response": response.text
                })
                return False, {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.failed_tests.append({
                "test": name,
                "error": str(e)
            })
            return False, {}

    def test_health_endpoint(self):
        """Test health check endpoint"""
        return self.run_test(
            "Health Check",
            "GET",
            "api/health",
            200
        )

    def test_submit_lead_valid(self):
        """Test submitting a valid lead"""
        test_lead = {
            "name": "John Doe",
            "email": "john.doe@testcompany.com",
            "company": "Test Company Inc",
            "phone": "+1-555-123-4567",
            "use_case": "Inbound sales automation"
        }
        
        return self.run_test(
            "Submit Valid Lead",
            "POST",
            "api/leads",
            200,
            data=test_lead
        )

    def test_submit_lead_missing_required(self):
        """Test submitting lead with missing required fields"""
        incomplete_lead = {
            "name": "Jane Doe",
            "email": "jane@test.com"
            # Missing company and phone
        }
        
        success, response = self.run_test(
            "Submit Incomplete Lead",
            "POST",
            "api/leads",
            422,  # Validation error expected
            data=incomplete_lead
        )
        return success

    def test_submit_lead_invalid_email(self):
        """Test submitting lead with invalid email"""
        invalid_lead = {
            "name": "Bob Smith",
            "email": "invalid-email",
            "company": "Test Corp",
            "phone": "+1-555-987-6543",
            "use_case": "Customer support"
        }
        
        return self.run_test(
            "Submit Lead with Invalid Email",
            "POST",
            "api/leads",
            422,  # Validation error expected
            data=invalid_lead
        )

    def test_get_leads(self):
        """Test getting all leads (for testing purposes)"""
        return self.run_test(
            "Get All Leads",
            "GET",
            "api/leads",
            200
        )

def main():
    print("🚀 Starting Voxy Landing Page API Tests")
    print("=" * 50)
    
    # Setup
    tester = VoxyAPITester()

    # Run tests
    print("\n📋 Running Backend API Tests...")
    
    # Test 1: Health check
    health_success, health_data = tester.test_health_endpoint()
    
    # Test 2: Submit valid lead
    lead_success, lead_data = tester.test_submit_lead_valid()
    
    # Test 3: Get leads
    get_leads_success, leads_data = tester.test_get_leads()
    
    # Test 4: Submit incomplete lead (should fail validation)
    incomplete_success = tester.test_submit_lead_missing_required()
    
    # Test 5: Submit lead with invalid email (should fail validation)
    invalid_email_success = tester.test_submit_lead_invalid_email()

    # Print results
    print("\n" + "=" * 50)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} passed")
    
    if tester.failed_tests:
        print("\n❌ Failed Tests:")
        for failed in tester.failed_tests:
            print(f"   - {failed.get('test', 'Unknown')}: {failed}")
    
    # Check critical functionality
    critical_tests_passed = health_success and lead_success and get_leads_success
    
    if critical_tests_passed:
        print("\n✅ All critical backend functionality is working!")
        return 0
    else:
        print("\n❌ Critical backend issues found!")
        return 1

if __name__ == "__main__":
    sys.exit(main())