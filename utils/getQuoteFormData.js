export const servicePropertyMap = {
    Residential: [
        { value: "Windscreen Repair", label: "Windscreen Repair", price: 0 },
        { value: "Windscreen Replacement", label: "Windscreen Replacement", price: 400 },
        { value: "Mobile Windscreen Repair", label: "Mobile Windscreen Repair", price: 0 },
        { value: "Wing Mirror Upgrade", label: "Wing Mirror Upgrade", price: 0 },
        { value: "Headlight Polishing", label: "Headlight Polishing", price: 0 },
        { value: "Rear Window Replacement", label: "Rear Window Replacement", price: 0 },

    ],
    Commercial: [
        { value: "Office Cleaning", label: "Office Cleaning" },
        { value: "Vinyl Floor Stripping and Polishing", label: "Vinyl Floor Stripping and Polishing" },
        { value: "Commercials Cleaning", label: "Commercials Cleaning", price: 0 },
        { value: "Carpet Cleaning", label: "Carpet Cleaning", price: 0 },
        { value: "Oven Cleaning", label: "Oven Cleaning", price: 150 },
        { value: "Spring Cleaning", label: "Spring Cleaning", price: 750 },
        { value: "Upholstery Cleaning", label: "Upholstery Cleaning", price: 400 },
        { value: "Vinyl Floor Striping", label: "Vinyl Floor Striping", price: 400 },
        { value: "Window Cleaning", label: "Window Cleaning", price: 400 },
        // Add more commercial services as needed
    ],
};

// utils/getQuoteFormData.js

export const getQuoteFormData = [

    {
        id: 'firstname',
        label: 'First name',
        type: 'text',
        required: true,
        autoComplete: "given-name",
        validation: value => {
            if (typeof value === 'string') {
                return value.trim().length > 2;
            }
            return false;
        },
        errorMessage: 'First name should be at least 3 characters long'
    },
  
    {
        id: 'email',
        label: 'Email address',
        type: 'email',
        required: true,
        autoComplete: "email",
        validation: value => /\S+@\S+\.\S+/.test(value),
        errorMessage: 'Enter a valid email address'
    },
    {
        id: 'phone',
        label: 'Phone number',
        type: 'tel',
        required: false,
        autoComplete: "tel",
        validation: value => {
            const cleanPhone = (value || '').replace(/[^0-9]/g, '');
            return cleanPhone.length > 6; // Matches numbers having more than 6 characters
        },
        errorMessage: 'Please enter a valid New Zealand phone number'
    },
    // {
    //     id: 'address',
    //     label: 'Address',
    //     type: 'text',
    //     required: false,
    // },
 
  
    // {
    //     id: 'propertyType',
    //     label: 'Property type',
    //     type: 'select', // or 'radio' for single selection
    //     options: [
    //         { value: 'Residential', label: 'Residential' },
    //         { value: 'Commercial', label: 'Commercial' },
    //     ],
    //     required: false,
    //     multiple: false
    // },
    {
        id: 'service',
        label: 'Service required',
        type: 'chip', // or 'radio' for single selection
        multiple: true,
        priceType: "fixed",
        options: [       { value: "Windscreen Repair", label: "Windscreen Repair", price: 0 },
            { value: "Windscreen Replacement", label: "Windscreen Replacement", price: 400 },
            { value: "Mobile Windscreen Repair", label: "Mobile Windscreen Repair", price: 0 },
            { value: "Wing Mirror Upgrade", label: "Wing Mirror Upgrade", price: 0 },
            { value: "Headlight Polishing", label: "Headlight Polishing", price: 0 },
            { value: "Rear Window Replacement", label: "Rear Window Replacement", price: 0 },
    
         ], // Will be populated dynamically
        required: false, // Make it required if necessary
    },
    {
        id: 'message',
        label: 'Message',
        type: 'textarea',
        required: false,
    },
];
