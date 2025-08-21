import React, { useState } from 'react';
import { X } from 'lucide-react';
import StepsIndicator from './components/StepsIndicator';
import BasicInfo from './Steps/BasicInfo';
import Personality from './Steps/Personality';
import Expertise from './Steps/Expertise';
import FinalizeAgent from './Steps/FinalizeAgent';

const AgentCreationTool = ({ onClose, onCreated }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [prophetData, setProphetData] = useState({
    name: '',
    purpose: '',
    communicationStyle: 'balanced',
    traits: [],
    tone: 'professional',
    domains: [],
    specializations: []
  });

  const updateProphetData = (data) => {
    setProphetData(prev => ({ ...prev, ...data }));
  };

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const handleFinish = (finalData) => {
    try {
      // Check existing seraphs
      const existingProphets = JSON.parse(localStorage.getItem('myProphets') || '[]');
      
      // Check if prophet with same name already exists
      if (existingProphets.some(prophet => prophet.name === finalData.name)) {
        alert('A prophet with this name already exists!');
        return;
      }
  
      const newProphets = [...existingProphets, finalData];
      localStorage.setItem('myProphets', JSON.stringify(newProphets));
  
      // Call onCreated callback
      if (onCreated) {
        onCreated();
      }
    } catch (error) {
      console.error('Error saving prophet:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
    onClick={(e) => e.stopPropagation()}>
      <div className="w-[600px] bg-black/80 border border-blue-500/30">
        <div className="p-4 border-b border-blue-500/30 bg-blue-900/20 flex justify-between items-center">
          <h2 className="text-blue-400 text-xl">Call Your Biblical Prophet</h2>
          <button 
            onClick={onClose}
            className="text-blue-400 hover:text-blue-300"
          >
            <X size={20} />
          </button>
        </div>

        <StepsIndicator currentStep={currentStep} totalSteps={4} />

        <div className="p-6">
          {currentStep === 1 && (
            <BasicInfo 
              data={prophetData} 
              updateData={updateProphetData} 
              onNext={handleNext} 
            />
          )}
          {currentStep === 2 && (
            <Personality 
              data={prophetData} 
              updateData={updateProphetData} 
              onNext={handleNext} 
              onBack={handleBack} 
            />
          )}
          {currentStep === 3 && (
            <Expertise 
              data={prophetData} 
              updateData={updateProphetData} 
              onNext={handleNext} 
              onBack={handleBack} 
            />
          )}
          {currentStep === 4 && (
            <FinalizeAgent 
              data={prophetData}
              onBack={handleBack}
              onFinish={handleFinish}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AgentCreationTool;