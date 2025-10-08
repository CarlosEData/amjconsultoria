import React from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';

interface ServiceDetail {
  title: string;
  description: string;
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  summary: string;
  details: ServiceDetail[];
  expandedDetails?: { [key: string]: boolean };
  onToggleDetail?: (title: string) => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({
  isOpen,
  onClose,
  title,
  summary,
  details,
  expandedDetails = {},
  onToggleDetail
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden">
        <div className="sticky top-0 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] px-8 py-6 flex items-center justify-between border-b border-gray-200">
          <h2 className="text-2xl font-bold text-white pr-8">{title}</h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all duration-300 flex-shrink-0"
            aria-label="Fechar modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(85vh-88px)] px-8 py-6">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-[#1e3a8a] mb-3">Resumo do Serviço</h3>
            <p className="text-gray-700 leading-relaxed">{summary}</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#1e3a8a] mb-4">Serviços Técnicos Especializados</h3>
            <div className="space-y-3">
              {details.map((detail, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => onToggleDetail?.(detail.title)}
                    className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                  >
                    <span className="font-semibold text-gray-900 text-sm text-left">{detail.title}</span>
                    {expandedDetails[detail.title] ? (
                      <ChevronUp className="w-4 h-4 text-[#1e3a8a] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#1e3a8a] flex-shrink-0" />
                    )}
                  </button>
                  {expandedDetails[detail.title] && (
                    <div className="px-4 py-3 bg-white border-t border-gray-200">
                      <p className="text-sm text-gray-700 leading-relaxed">{detail.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
