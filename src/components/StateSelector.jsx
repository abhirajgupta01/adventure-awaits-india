
import React, { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const StateSelector = ({ onStateChange }) => {
  const states = [
    { id: 'all', name: 'All States' },
    { id: 'kerala', name: 'Kerala' },
    { id: 'rajasthan', name: 'Rajasthan' },
    { id: 'goa', name: 'Goa' },
    { id: 'tamil-nadu', name: 'Tamil Nadu' },
    { id: 'himachal-pradesh', name: 'Himachal Pradesh' },
    { id: 'maharashtra', name: 'Maharashtra' },
    { id: 'karnataka', name: 'Karnataka' },
    { id: 'uttarakhand', name: 'Uttarakhand' }
  ];
  
  const handleStateChange = (value) => {
    onStateChange(value);
  };
  
  return (
    <div className="w-full max-w-xs">
      <Select onValueChange={handleStateChange} defaultValue="all">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a state" />
        </SelectTrigger>
        <SelectContent>
          {states.map((state) => (
            <SelectItem key={state.id} value={state.id}>
              {state.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default StateSelector;
