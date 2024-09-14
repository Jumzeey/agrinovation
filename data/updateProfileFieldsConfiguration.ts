import {
  businessRegistrationOptions,
  fundingStageOptions,
  proofOfAddressOptions,
  sectorOptions,
  typeOfBusinessOptions,
  researchSectorOptions,
  investmentSectorOptions,
  investorTypeOptions,
  investmentPeriodOptions,
  produceOptions,
  mergeOptions,
  acquisitionOptions,
} from "./businessOptions";

export const fieldConfigurations: Record<
  "Agripreneur" | "Investor" | "Researcher" | "Others",
  Array<any>
> = {
  Agripreneur: [
    {
      id: "businessLogo",
      type: "file-upload",
      props: {
        id: "businessLogo",
        label: "Agripreneur Logo",
        accept: "image/*",
      },
      model: "businessLogo",
      handler: "handleFileUpload",
    },
    {
      id: "aboutBusiness",
      type: "Textarea",
      props: {
        id: "about",
        placeholder: "About Agripreneur",
        label: "About Business",
      },
      model: "aboutBusiness",
    },
    {
      id: "isRegistered",
      type: "Select",
      props: {
        id: "isRegistered",
        label: "Is your business registered?",
        options: businessRegistrationOptions,
      },
      model: "selectedIsRegisteredOption",
    },
    {
      id: "cacDocument",
      type: "File",
      props: {
        id: "cacDocument",
        label: "Upload CAC Document *",
        accept: "image/*",
      },
      model: "cacDocument",
      handler: "handleFileUpload",
    },
    {
      id: "addressProof",
      type: "Select",
      props: {
        id: "addressProof",
        label: "Proof Of Address",
        options: proofOfAddressOptions,
      },
      model: "selectedProofOption",
    },
    {
      id: "businessDocument",
      type: "File",
      props: {
        id: "businessDocument",
        label: "Upload Document",
        accept: "image/*",
      },
      model: "businessDocument",
      handler: "handleFileUpload",
    },
    {
      id: "address",
      type: "Input",
      props: {
        id: "address",
        type: "text",
        placeholder: "Address",
        label: "Address",
      },
      model: "address",
    },
    {
      id: "agripreneurSector",
      type: "Select",
      props: {
        id: "agripreneurSector",
        label: "Sector",
        options: sectorOptions,
      },
      model: "selectedSectorOption",
    },
    {
      id: "size",
      type: "Input",
      props: {
        id: "size",
        type: "text",
        placeholder: "Farm Size",
        label: "Farm Size",
      },
      model: "farmSize",
    },
    {
      id: "businessType",
      type: "Select",
      props: {
        id: "businessType",
        label: "Type of Business",
        options: typeOfBusinessOptions,
      },
      model: "selectedBusinessTypeOption",
    },
    {
      id: "produceType",
      type: "Select",
      props: {
        id: "produceType",
        label: "Type Of Produce",
        options: produceOptions,
      },
      model: "selectedProduceOption",
    },
    {
      id: "labour",
      type: "Input",
      props: {
        id: "labour",
        type: "text",
        placeholder: "Labour...",
        label: "Labour Force",
      },
      model: "labourForce",
    },
    {
      id: "years",
      type: "Input",
      props: {
        id: "years",
        type: "text",
        placeholder: "Years...",
        label: "Years of Operation",
      },
      model: "yearsOfOperation",
    },
    {
      id: "revenue",
      type: "Input",
      props: {
        id: "revenue",
        type: "text",
        placeholder: "Revenue...",
        label: "Average Annual Revenue",
      },
      model: "averageRevenue",
    },
    {
      id: "instagram",
      type: "Input",
      props: {
        id: "instagram",
        type: "text",
        placeholder: "Instagram...",
        label: "Instagram Link",
      },
      model: "instagramLink",
    },
    {
      id: "twitter",
      type: "Input",
      props: {
        id: "twitter",
        type: "text",
        placeholder: "X Link...",
        label: "X Link (formerly Twitter)",
      },
      model: "twitterLink",
    },
    {
      id: "facebook",
      type: "Input",
      props: {
        id: "facebook",
        type: "text",
        placeholder: "Facebook...",
        label: "Facebook Link",
      },
      model: "facebookLink",
    },
    {
      id: "website",
      type: "Input",
      props: {
        id: "website",
        type: "text",
        placeholder: "Website...",
        label: "Link to Business Website",
      },
      model: "websiteLink",
    },
    {
      id: "phone",
      type: "Input",
      props: {
        id: "phone",
        type: "tel",
        placeholder: "Phone...",
        label: "Business Phone Number",
      },
      model: "businessPhone",
    },
    {
      id: "email",
      type: "Input",
      props: {
        id: "email",
        type: "email",
        placeholder: "Email...",
        label: "Email",
      },
      model: "email",
    },
    {
      id: "merge",
      type: "Select",
      props: {
        id: "merge",
        label: "Available for Merge",
        options: mergeOptions,
      },
      model: "selectedMergeOption",
    },
    {
      id: "acquisition",
      type: "Select",
      props: {
        id: "acquisition",
        label: "Available for Acquisition",
        options: acquisitionOptions,
      },
      model: "selectedAcquisitionOption",
    },
  ],
  Investor: [
    {
      id: "businessLogo",
      type: "file-upload",
      props: {
        id: "researcherLogo",
        label: "Investor Logo",
        accept: "image/*",
      },
      model: "businessLogo",
      handler: "handleFileUpload",
    },
    {
      id: "investorDetails",
      type: "Textarea",
      props: {
        id: "investor",
        placeholder: "About investor...",
        label: "About Investor",
      },
      model: "aboutBusiness",
    },
    {
      id: "investorType",
      type: "Select",
      props: {
        id: "investorType",
        label: "Investor Type",
        options: investorTypeOptions,
      },
      model: "selectedInvestorType",
    },
    {
      id: "investorSector",
      type: "Select",
      props: {
        id: "investorSector",
        label: "Sector of Interest ",
        options: investmentSectorOptions,
      },
      model: "selectedInvestmentSectorOption",
    },
    {
      id: "investorPeriod",
      type: "Select",
      props: {
        id: "investorPeriod",
        label: "Period Of Investment ",
        options: investmentPeriodOptions,
      },
      model: "selectedInvestmentPeriodOption",
    },
    {
      id: "duration",
      type: "Input",
      props: {
        id: "duration",
        type: "text",
        placeholder: "Years of operation..",
        label: "Years of Operation",
      },
      model: "yearsOfOperation",
    },
    {
      id: "address",
      type: "Input",
      props: {
        id: "address",
        type: "text",
        placeholder: "Address",
        label: "Address",
      },
      model: "address",
    },
    {
      id: "facebook",
      type: "Input",
      props: {
        id: "facebook",
        type: "text",
        placeholder: "facebook link",
        label: "Facebook Link",
      },
      model: "facebookLink",
    },
    {
      id: "website",
      type: "Input",
      props: {
        id: "website",
        type: "text",
        placeholder: "website...",
        label: "Link to Business Website",
      },
      model: "websiteLink",
    },
    {
      id: "instagram",
      type: "Input",
      props: {
        id: "instagram",
        type: "text",
        placeholder: "instagram...",
        label: "Instagram Link",
      },
      model: "instagramLink",
    },
    {
      id: "twitter",
      type: "Input",
      props: {
        id: "twitter",
        type: "text",
        placeholder: "twitter...",
        label: "X Link (Formerly Twitter)",
      },
      model: "twitterLink",
    },
    // Add more fields for Investor here...
  ],
  Researcher: [
    {
      id: "businessLogo",
      type: "file-upload",
      props: { id: "researcherLogo", label: "Picture", accept: "image/*" },
      model: "businessLogo",
      handler: "handleFileUpload",
    },
    {
      id: "researchDetails",
      type: "Textarea",
      props: {
        id: "research",
        placeholder: "About researcher...",
        label: "About Researcher",
      },
      model: "aboutBusiness",
    },
    {
      id: "researchType",
      type: "Input",
      props: {
        id: "researchType",
        placeholder: "Type",
        label: "Type of Researcher",
      },
      model: "researcherType",
    },
    {
      id: "researchSector",
      type: "Select",
      props: {
        id: "researchSector",
        label: "Research Sector ",
        options: researchSectorOptions,
      },
      model: "selectedResearchSectorOption",
    },
    {
      id: "address",
      type: "Input",
      props: {
        id: "address",
        type: "text",
        placeholder: "Address",
        label: "Address",
      },
      model: "address",
    },
    {
      id: "facebook",
      type: "Input",
      props: {
        id: "facebook",
        type: "text",
        placeholder: "facebook link",
        label: "Facebook Link",
      },
      model: "facebookLink",
    },
    {
      id: "website",
      type: "Input",
      props: {
        id: "website",
        type: "text",
        placeholder: "website...",
        label: "Link to Business Website",
      },
      model: "websiteLink",
    },
    {
      id: "instagram",
      type: "Input",
      props: {
        id: "instagram",
        type: "text",
        placeholder: "instagram...",
        label: "Instagram Link",
      },
      model: "instagramLink",
    },
    {
      id: "twitter",
      type: "Input",
      props: {
        id: "twitter",
        type: "text",
        placeholder: "twitter...",
        label: "X Link (Formerly Twitter)",
      },
      model: "twitterLink",
    },
    // Add more fields for Researcher here...
  ],
  Others: [
    {
      id: "researchDetails",
      type: "Textarea",
      props: {
        id: "research",
        placeholder: "Research Details",
        label: "Research Details",
      },
      model: "researchDetails",
    },
    // Add more fields for Researcher here...
  ],
};