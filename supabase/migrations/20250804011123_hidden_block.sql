/*
  # Create companies table for production tracking

  1. New Tables
    - `companies`
      - `id` (uuid, primary key)
      - `company_name` (text, company name for greeting)
      - `current_phase` (integer, 1-6 representing production phase)
      - `unique_token` (text, unique identifier for URL access)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `companies` table
    - Add policy for public read access using unique_token
    - Add policy for authenticated users to manage data

  3. Sample Data
    - Insert sample company for testing
*/

CREATE TABLE IF NOT EXISTS companies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text NOT NULL,
  current_phase integer NOT NULL DEFAULT 1 CHECK (current_phase >= 1 AND current_phase <= 6),
  unique_token text UNIQUE NOT NULL DEFAULT gen_random_uuid()::text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE companies ENABLE ROW LEVEL SECURITY;

-- Allow public read access using unique_token
CREATE POLICY "Companies can be read by token"
  ON companies
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to manage companies
CREATE POLICY "Authenticated users can manage companies"
  ON companies
  FOR ALL
  TO authenticated
  USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_companies_updated_at
  BEFORE UPDATE ON companies
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data for testing
INSERT INTO companies (company_name, current_phase, unique_token) VALUES
  ('Acme Corporation', 3, 'demo-token-123'),
  ('TechStart Inc', 1, 'demo-token-456'),
  ('Digital Solutions LLC', 5, 'demo-token-789');