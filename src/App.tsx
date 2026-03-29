/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ShieldCheck, 
  MapPin, 
  MessageCircle, 
  Clock, 
  CheckCircle2, 
  MonitorSmartphone,
  ChevronRight,
  Star
} from "lucide-react";

export default function App() {
  const scrollToForm = () => {
    const formElement = document.getElementById("formulario");
    formElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation - Mobile Optimized */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 py-4">
        <div className="flex justify-between items-center max-w-md mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded-sm" title="Logo Placeholder" />
            <span className="text-brand-navy font-bold text-lg tracking-tight uppercase">AESTHETIC DENTAL CENTER</span>
          </div>
          <button 
            onClick={scrollToForm}
            className="bg-brand-cyan text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-brand-cyan/20 active:scale-95 transition-all"
          >
            Agendar
          </button>
        </div>
      </nav>

      {/* Hero Section - Mobile First */}
      <section className="relative pt-10 pb-16 overflow-hidden px-4">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-full h-64 bg-brand-navy/5 rounded-b-[50px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-cyan/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-md mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-bold mb-4">
              <ShieldCheck size={14} />
              <span>19 AÑOS DE EXPERIENCIA</span>
            </div>
            <h1 className="text-4xl font-extrabold text-brand-navy leading-tight mb-4">
              Recupere su Sonrisa con <span className="text-brand-cyan">Tecnología de Punta</span>
            </h1>
            <p className="text-base text-brand-steel mb-8 leading-relaxed px-2">
              Especialistas en implantes dentales para pacientes de Arizona y Sonora. Resultados garantizados con análisis digital.
            </p>
            
            <div className="flex flex-col gap-4 mb-10">
              <button 
                onClick={scrollToForm}
                className="bg-brand-cyan text-white w-full py-4 rounded-2xl font-bold text-lg shadow-xl shadow-brand-cyan/30 flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
              >
                Agendar Cita Ahora <ChevronRight size={20} />
              </button>
              
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center -space-x-2">
                  {[1,2,3,4].map(i => (
                    <img 
                      key={i} 
                      src={`https://picsum.photos/seed/patient${i}/100/100`} 
                      alt={`Paciente ${i}`}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-brand-cyan flex items-center justify-center text-[10px] text-white font-bold shadow-sm">
                    +50
                  </div>
                </div>
                <div className="text-xs">
                  <div className="flex justify-center text-yellow-400 mb-1">
                    {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <span className="text-brand-steel font-medium">Más de 50 reseñas positivas de pacientes felices</span>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-3xl bg-brand-navy overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center text-white/20 italic text-center p-6 text-sm">
                Insertar (Imagen Premium de Clínica o Paciente Sonriente)
              </div>
              <div className="absolute bottom-4 left-4 right-4 glass-card p-4 rounded-xl shadow-lg flex items-center gap-3">
                <div className="bg-brand-cyan p-2 rounded-lg text-white">
                  <MonitorSmartphone size={20} />
                </div>
                <div className="text-left">
                  <p className="text-brand-navy font-bold text-xs uppercase tracking-wider">Ventaja Tecnológica</p>
                  <p className="text-brand-steel text-[10px]">Análisis Digital Computarizado</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Advantage Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-3">Implantes Dentales de Alta Gama</h2>
            <p className="text-sm text-brand-steel">Nuestra prioridad es su salud y estética dental mediante procesos digitales precisos.</p>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-brand-navy text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <MonitorSmartphone size={80} />
              </div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-cyan rounded-lg flex items-center justify-center">
                  <CheckCircle2 size={18} />
                </div>
                Nuestra Ventaja Digital
              </h3>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                Utilizamos análisis computarizado y renderizado 3D para que vea su resultado final antes de iniciar. Esto garantiza precisión absoluta en cada implante.
              </p>
              <ul className="grid grid-cols-1 gap-3 mb-6">
                <li className="flex items-center gap-2 text-xs"><CheckCircle2 size={14} className="text-brand-cyan" /> Escaneo Intraoral 3D</li>
                <li className="flex items-center gap-2 text-xs"><CheckCircle2 size={14} className="text-brand-cyan" /> Diseño Digital de Sonrisa</li>
                <li className="flex items-center gap-2 text-xs"><CheckCircle2 size={14} className="text-brand-cyan" /> Materiales Premium (Titanio/Cerámica)</li>
              </ul>
              <button onClick={scrollToForm} className="w-full bg-brand-cyan py-3 rounded-xl font-bold text-sm active:scale-95 transition-all">
                Agendar Evaluación Digital
              </button>
            </div>

            <div className="p-6 rounded-3xl border border-gray-100 bg-gray-50 flex flex-col gap-4">
              <h3 className="text-lg font-bold text-brand-navy">¿Por qué elegirnos?</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="bg-white p-2 rounded-xl shadow-sm text-brand-cyan h-fit">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-navy">Experiencia Comprobada</p>
                    <p className="text-xs text-brand-steel">Casi dos décadas transformando sonrisas en la frontera.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-white p-2 rounded-xl shadow-sm text-brand-cyan h-fit">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-navy">Atención Eficiente</p>
                    <p className="text-xs text-brand-steel">Horarios flexibles de Lunes a Sábado para su comodidad.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Section - Mobile Optimized */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-md mx-auto bg-white rounded-[30px] shadow-lg overflow-hidden border border-gray-100">
          <div className="aspect-square bg-gray-200 flex items-center justify-center italic text-gray-400 text-xs p-8 text-center">
            Insertar (Foto Profesional del Dr. Adrián Valera Muñoz)
          </div>
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-2">Dr. Adrián Valera Muñoz</h2>
            <p className="text-brand-cyan font-bold text-[10px] tracking-widest uppercase mb-4">Universidad Cuauhtemoc</p>
            <p className="text-sm text-brand-steel leading-relaxed mb-6">
              Especialista en restauración dental con 19 años de trayectoria. Apasionado por devolver la confianza a sus pacientes mediante tecnología de vanguardia.
            </p>
            <div className="italic text-xs text-brand-steel mb-6 p-3 bg-gray-50 rounded-xl border-l-4 border-brand-cyan">
              Insertar (Más detalles sobre estudios y trayectoria)
            </div>
            <button 
              onClick={scrollToForm}
              className="w-full border-2 border-brand-navy text-brand-navy py-3 rounded-xl font-bold text-sm active:bg-brand-navy active:text-white transition-all"
            >
              Contactar al Doctor
            </button>
          </div>
        </div>
      </section>

      {/* Form Placeholder Section */}
      <section id="formulario" className="py-20 px-4 bg-brand-navy relative">
        <div className="absolute top-0 left-0 w-full h-12 bg-gray-50 rounded-b-[40px]" />
        
        <div className="max-w-md mx-auto pt-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3 text-white">Agende su Consulta</h2>
            <p className="text-sm text-gray-400">Dé el primer paso hacia su nueva sonrisa hoy mismo.</p>
          </div>

          <div className="bg-white/10 border-2 border-dashed border-white/20 rounded-[30px] p-12 flex items-center justify-center">
            <span className="text-2xl font-bold text-white/50 tracking-widest uppercase">Formulario</span>
          </div>
        </div>
      </section>

      {/* Location and Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-3 text-brand-navy">Ubicación y Contacto</h2>
            <p className="text-sm text-brand-steel">Visítenos en nuestra clínica en el corazón de Nogales.</p>
          </div>

          <div className="space-y-8">
            {/* Map Container */}
            <div className="w-full aspect-square rounded-[30px] overflow-hidden shadow-lg border border-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.646872504381!2d-110.9473758242054!3d31.32897807430155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d6ad26a874dcd7%3A0x96c57594bc259565!2sAv.%20Adolfo%20L%C3%B3pez%20Mateos%20171-local%202%2C%20Fund%C3%B3%20Legal%2C%20Centro%2C%2084000%20Heroica%20Nogales%2C%20Son.%2C%20Mexico!5e0!3m2!1sen!2sus!4v1711712100000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Aesthetic Dental Nogales"
              ></iframe>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="bg-brand-cyan/10 p-3 rounded-xl text-brand-cyan">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-1">Dirección</p>
                  <p className="text-sm text-brand-steel leading-relaxed">
                    Adolfo lopez mateos #171 local 2<br />
                    Nogales, Sonora, México
                  </p>
                </div>
              </div>

              <button 
                onClick={scrollToForm}
                className="w-full flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 text-left active:bg-gray-100 transition-colors"
              >
                <div className="bg-brand-cyan/10 p-3 rounded-xl text-brand-cyan">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-1">Contáctanos</p>
                  <p className="text-sm text-brand-steel font-bold">WhatsApp</p>
                </div>
              </button>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="bg-brand-cyan/10 p-3 rounded-xl text-brand-cyan">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-1">Horarios de Atención</p>
                  <p className="text-sm text-brand-steel">Lunes a Sábado: 9:00am - 6:00pm</p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-[10px] text-center text-brand-steel/40 mt-12 italic">
            Insertar (Cédula Profesional y Aviso de Publicidad)
          </p>
        </div>
      </section>
    </div>
  );
}
