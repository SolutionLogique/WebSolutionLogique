"use client";
import React, { useState } from "react";
import { ModernCard } from "@/components/ui/modernCard";
import { ModernButton } from "@/components/ui/modernButton";
import { Download, Monitor, Shield, CheckCircle, Key } from "lucide-react";

export default function RustDeskSection() {
  const [downloadStarted, setDownloadStarted] = useState(false);

  const handleDownloadExe = () => {
    setDownloadStarted(true);
    window.location.href = '/rustDesk/rustdesk-1.4.4-x86_64.exe';

    setTimeout(() => {
      setDownloadStarted(false);
    }, 5000);
  };

  const handleDownloadMsi = () => {
    setDownloadStarted(true);
    window.location.href = '/rustDesk/rustdesk-1.4.4-x86_64.msi';

    setTimeout(() => {
      setDownloadStarted(false);
    }, 5000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Carte principale RustDesk */}
      <ModernCard variant="elevated" size="lg">
        <div className="text-center space-y-6">
          {/* Icône et titre */}
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary-100 rounded-2xl flex items-center justify-center">
              <Monitor className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              Télémaintenance RustDesk
            </h2>
            <p className="text-foreground-muted">
              Solution de télémaintenance rapide et sécurisée recommandée
            </p>
          </div>

          {/* Boutons de téléchargement */}
          <div className="space-y-3">
            <ModernButton
              variant="primary"
              size="lg"
              onClick={handleDownloadExe}
              icon={<Download />}
              iconPosition="left"
              className="w-full"
            >
              Télécharger RustDesk (EXE - Recommandé)
            </ModernButton>

            <ModernButton
              variant="outline"
              size="md"
              onClick={handleDownloadMsi}
              icon={<Download />}
              iconPosition="left"
              className="w-full"
            >
              Télécharger RustDesk (MSI - Installation)
            </ModernButton>
          </div>

          {downloadStarted && (
            <div className="bg-success/10 border border-success/20 rounded-lg p-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <p className="text-success text-sm font-medium">
                  Téléchargement lancé ! Le fichier va s'enregistrer dans vos téléchargements.
                </p>
              </div>
            </div>
          )}
        </div>
      </ModernCard>

      {/* Instructions d'utilisation */}
      <ModernCard variant="outline">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-accent-600" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Instructions</h3>
          </div>

          <ol className="space-y-3 text-foreground-muted">
            <li className="flex items-start space-x-3">
              <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">1</span>
              <span>Téléchargez RustDesk en cliquant sur le bouton ci-dessus (EXE recommandé pour une utilisation immédiate)</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">2</span>
              <span>Lancez le fichier téléchargé (l'EXE ne nécessite pas d'installation)</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">3</span>
              <div className="flex-1">
                <div className="font-medium text-foreground mb-1">Communiquez au technicien :</div>
                <div className="flex items-start space-x-2 pl-4">
                  <Key className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">L'ID</span> affiché dans RustDesk (série de chiffres)<br/>
                    <span className="font-semibold">Le mot de passe</span> temporaire affiché en dessous
                  </div>
                </div>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">4</span>
              <span>Le technicien pourra alors se connecter à votre poste pour vous assister</span>
            </li>
          </ol>
        </div>
      </ModernCard>

      {/* Information sécurité */}
      <ModernCard variant="glass" className="bg-success-50/50 border-success-200">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center space-x-2">
            <Shield className="w-5 h-5 text-success-600" />
            <h4 className="font-semibold text-foreground">Connexion sécurisée et privée</h4>
          </div>
          <p className="text-sm text-foreground-muted">
            RustDesk utilise un chiffrement de bout en bout pour garantir la sécurité de votre session.
            Vos données restent privées et la connexion est temporaire.
          </p>
        </div>
      </ModernCard>
    </div>
  );
}
