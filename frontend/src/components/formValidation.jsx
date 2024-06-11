export default function FormValidate(data) {
  const nameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^\d{9,11}$/; // Accepts phone numbers with 9 to 11 digits
  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!data.name) {
      return 'Please enter a name';
  } else if (!nameRegex.test(data.name)) {
      return 'Please enter a valid name';
  } else if (!data.email) {
      return 'Please enter an email address';
  } else if (!emailRegex.test(data.email)) {
      return 'Please enter a valid email address';
  } else if (!data.gender) {
      return 'Please select a gender';
  } else if (!data.dob) {
      return 'Please enter a birth date';
  } else if (!data.country) {
      return 'Please select a country';
  } else if (!data.phone_no) {
      return 'Please enter a phone number';
  } else if (!phoneRegex.test(data.phone_no)) {
      return 'Please enter a valid phone number';
  } else if (!data.type) {
      return 'Please enter a type';
  } else if (!data.username) {
      return 'Please enter a username';
  } else if (!data.password) {
      return 'Please enter a password';
  } else if (!passRegex.test(data.password)) {
      return 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character';
  } else if (!data.confirm_password) {
      return 'Please confirm your password';
  } else if (data.password !== data.confirm_password) {
      return 'Passwords do not match';
  } else {
      return ''; // Empty string indicates valid data
  }
}

