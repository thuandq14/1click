/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  Phone, 
  Mail, 
  User, 
  Star, 
  Trees, 
  Waves, 
  School,
  ArrowRight,
  Menu,
  X,
  Bell
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Constants ---

const PRICING_DATA = [
  { type: 'Căn hộ Studio', area: '28 - 33m²', price: '~ 2.450 Tỷ', icon: Building2 },
  { type: 'Căn hộ 1BR + 1', area: '43 - 48m²', price: '~ 3.100 Tỷ', icon: Building2 },
  { type: 'Căn hộ 2BR', area: '55 - 62m²', price: '~ 4.250 Tỷ', icon: Building2 },
  { type: 'Căn hộ 3BR', area: '75 - 90m²', price: '~ 5.800 Tỷ', icon: Building2 },
];

const AMENITIES = [
  { title: 'Công viên 36ha', desc: 'Quy mô hàng đầu Đông Nam Á với 15 công viên chủ đề đa dạng.', icon: Trees },
  { title: 'Biển hồ cát trắng', desc: 'Mang không gian nghỉ dưỡng biển vào lòng thành phố.', icon: Waves },
  { title: 'Trường học Vinschool', desc: 'Hệ thống giáo dục chuẩn quốc tế ngay trong nội khu.', icon: School },
  { title: 'Bệnh viện Vinmec', desc: 'Chăm sóc sức khỏe toàn diện với thiết bị hiện đại.', icon: Star },
  { title: 'Vincom Mega Mall', desc: 'Trung tâm mua sắm, giải trí sầm uất bậc nhất.', icon: Building2 },
  { title: 'Hệ thống Bus điện', desc: 'Giao thông xanh nội khu và kết nối trung tâm thuận tiện.', icon: MapPin },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] font-sans selection:bg-[#C5A059]/20 selection:text-[#C5A059]">
      
      {/* Decorative Background Element */}
      <div className="fixed top-0 right-0 w-1/3 h-full bg-[#F2F0E8] -z-0 opacity-50 pointer-events-none" />

      {/* --- Notification Banner --- */}
      <AnimatePresence>
        {showNotification && (
          <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-24 right-4 z-[60] max-w-sm w-full bg-white border border-[#E5E2D9] rounded-lg shadow-xl p-6 flex gap-4 items-start"
          >
            <div className="bg-[#C5A059]/10 p-2 rounded-sm text-[#C5A059]">
              <Bell size={20} />
            </div>
            <div className="flex-1">
              <h4 className="font-serif italic text-base text-[#1A2E44]">Ưu đãi đặc quyền</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Chiết khấu 15% khi thanh toán sớm và gói nội thất cao cấp trị giá 250tr.</p>
              <button 
                onClick={() => setShowNotification(false)}
                className="mt-3 text-[10px] font-bold text-[#C5A059] uppercase tracking-widest hover:underline"
              >
                Khám phá ngay
              </button>
            </div>
            <button onClick={() => setShowNotification(false)} className="text-gray-300 hover:text-gray-600">
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Navbar --- */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-10 py-6",
        isScrolled ? "bg-white/90 backdrop-blur-md border-b border-[#E5E2D9] py-4" : "bg-transparent border-b border-[#E5E2D9]/20"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#C5A059] rounded-sm flex items-center justify-center text-white font-bold text-xl italic">V</div>
             <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold leading-tight">
              Vinhomes <br /> 
              <span className="text-[#C5A059]">Grand Park</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {['Tổng quan', 'Bảng giá', 'Tiện ích', 'Vị trí'].map((item) => (
              <a 
                key={item} 
                href={`#${item}`} 
                className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#1A1A1A] hover:text-[#C5A059] transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-[#1A2E44] text-white px-8 py-3 rounded-sm text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#C5A059] transition-all"
            >
              Liên hệ
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-[#1A1A1A]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-[#FAF9F6] p-8 flex flex-col items-start justify-center gap-10"
          >
            <button className="absolute top-8 right-8" onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
            <div className="w-10 h-10 bg-[#C5A059] rounded-sm flex items-center justify-center text-white font-bold text-xl italic mb-4">V</div>
            {['Tổng quan', 'Bảng giá', 'Tiện ích', 'Vị trí'].map((item) => (
              <a 
                key={item} 
                href={`#${item}`} 
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-serif italic text-[#1A2E44] hover:text-[#C5A059] transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-sans uppercase tracking-[0.4em] font-bold text-[#C5A059] border-b-2 border-[#C5A059] pb-2"
            >
              Liên hệ ngay
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        {/* --- Hero Section --- */}
        <section className="relative min-h-screen flex items-center pt-20">
          <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-[11px] uppercase tracking-[0.5em] text-[#C5A059] font-black">Exclusive Living</h2>
              <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] text-[#1A2E44] tracking-tighter">
                Đẳng Cấp <br />
                <span className="italic">Sống Thượng Lưu</span>
              </h1>
              <p className="text-base md:text-lg text-gray-500 max-w-md leading-relaxed font-light italic">
                Trải nghiệm không gian sống xanh chuẩn Singapore tại trung tâm mới TP. Thủ Đức. Nơi hội tụ cộng đồng tinh hoa và tiện ích đặc quyền chuẩn 5 sao.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <a href="#contact" className="bg-[#1A2E44] text-white px-10 py-4 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-[#C5A059] transition-all text-center">
                  Nhận Báo Giá
                </a>
                <a href="#Tổng quan" className="border border-[#E5E2D9] text-[#1A1A1A] px-10 py-4 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-[#F2F0E8] transition-all text-center">
                  Xem Tổng Quan
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[4/5] overflow-hidden group"
            >
              <img 
                src="https://picsum.photos/seed/editorial_hero/1200/1500" 
                alt="Vinhomes Luxury" 
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E44]/20 to-transparent" />
            </motion.div>
          </div>

          <div className="absolute bottom-10 left-10 hidden md:flex items-center gap-6">
            <div className="w-12 h-[1px] bg-[#C5A059]" />
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-gray-400 italic">Scroll to Explore</span>
          </div>
        </section>

        {/* --- Overview Section --- */}
        <section id="Tổng quan" className="py-32 px-6 md:px-10">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5 space-y-8">
                 <h2 className="text-[11px] uppercase tracking-[0.5em] text-[#C5A059] font-black">Vị Thế Tinh Hoa</h2>
                 <h3 className="text-4xl md:text-6xl font-serif leading-tight text-[#1A2E44]">
                  Thành phố Ánh sáng <br /> Giữa lòng Thủ Đức
                 </h3>
                 <p className="text-gray-600 leading-relaxed font-light text-lg">
                  Tọa lạc tại vị trí chiến lược của Thành phố Thủ Đức, Vinhomes Grand Park được phát triển theo mô hình đô thị thông minh thế giới.
                 </p>
                 <div className="space-y-10 pt-8">
                  {[
                    { num: '01', title: 'Vị trí đắc địa', desc: 'Mặt tiền Nguyễn Xiển - Phước Thiện, Quận 9.' },
                    { num: '02', title: 'Tiện ích đa dạng', desc: 'Công viên, trường học, bệnh viện ngay trong nội khu.' },
                    { num: '03', title: 'Pháp lý minh bạch', desc: 'Sổ hồng lâu dài, bàn giao từ tập đoàn Vingroup.' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-8 group">
                      <span className="text-2xl font-serif italic text-[#C5A059] opacity-50 group-hover:opacity-100 transition-opacity">{item.num}</span>
                      <div className="space-y-2">
                        <h4 className="text-sm uppercase tracking-widest font-bold text-[#1A2E44]">{item.title}</h4>
                        <p className="text-sm text-gray-500 font-light italic">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                 </div>
              </div>

              <div className="lg:col-span-1 hidden lg:block" />

              <div className="lg:col-span-6 relative aspect-[3/4]">
                <img 
                  src="https://picsum.photos/seed/detail1/1000/1300" 
                  alt="Architecture" 
                  className="w-full h-full object-cover shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-12 -left-12 bg-[#1A2E44] text-white p-12 max-w-sm hidden md:block">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-black mb-4">Scale</div>
                  <div className="text-5xl font-serif italic mb-4 tracking-tighter">271 Hecta</div>
                  <p className="text-xs text-white/60 leading-relaxed font-light">Tổng diện tích dự án, quy mô như một thành phố thu nhỏ đầy đủ dịch vụ lưu trú và thương mại.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Pricing Section --- */}
        <section id="Bảng giá" className="py-32 bg-[#1A2E44] text-white px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl space-y-6">
                <h2 className="text-[11px] uppercase tracking-[0.5em] text-[#C5A059] font-black">Giá Trị Đầu Tư</h2>
                <h3 className="text-4xl md:text-6xl font-serif italic tracking-tighter">Bảng giá tham khảo 2026</h3>
              </div>
              <div className="text-right">
                 <p className="text-gray-400 text-xs uppercase tracking-widest italic mb-2">* Cập nhật thị trường quý 2/2024</p>
                 <div className="w-20 h-[1px] bg-[#C5A059] ml-auto" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-16">
              <div className="space-y-0">
                {PRICING_DATA.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex justify-between items-center border-b border-white/10 py-10 group hover:bg-white/5 px-4 transition-colors"
                  >
                    <div className="space-y-2">
                       <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-bold">{item.area}</span>
                       <h4 className="text-xl md:text-2xl font-serif tracking-tight">{item.type}</h4>
                    </div>
                    <div className="text-right">
                       <div className="text-2xl md:text-3xl font-light tracking-tighter text-[#C5A059]">{item.price}</div>
                       <p className="text-[9px] text-gray-500 uppercase tracking-widest mt-1">Dự kiến tham khảo</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-white/5 border border-white/10 p-12 flex flex-col justify-between">
                <div className="space-y-8">
                   <div className="w-12 h-12 border border-[#C5A059] rounded-sm flex items-center justify-center text-[#C5A059]">
                      <Star size={24} />
                   </div>
                   <h4 className="text-2xl font-serif italic">Chính sách ưu đãi độc bản</h4>
                   <p className="text-white/60 leading-relaxed font-light">Áp dụng cho dòng căn hộ cao cấp tại phân khu The Beverly & The Global. Hỗ trợ tài chính từ các ngân hàng đối tác chiến lược.</p>
                   <ul className="space-y-4 pt-4">
                      {[
                        'HTLS 0% trong vòng 24 tháng',
                        'Ân hạn nợ gốc lên đến 36 tháng',
                        'Tặng gói nội thất Editorial trị giá 200tr',
                        'Chiết khấu 3-15% khi thanh toán sớm'
                      ].map((li, i) => (
                        <li key={i} className="flex items-center gap-4 text-xs uppercase tracking-widest font-medium group">
                           <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full group-hover:scale-150 transition-transform" />
                           {li}
                        </li>
                      ))}
                   </ul>
                </div>
                <a href="#contact" className="mt-12 w-full py-5 border border-[#C5A059] text-[#C5A059] text-center text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-[#C5A059] hover:text-[#1A2E44] transition-all">
                   Đăng ký nhận báo giá chi tiết
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* --- Amenities Section --- */}
        <section id="Tiện ích" className="py-32 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 space-y-6">
              <h2 className="text-[11px] uppercase tracking-[0.5em] text-[#C5A059] font-black">Bespoke Amenities</h2>
              <h3 className="text-4xl md:text-6xl font-serif tracking-tighter text-[#1A2E44] leading-tight max-w-3xl">
                Kỷ Nguyên Sống Mới <br /> <span className="italic">Tại Thành Phố Toàn Cầu</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 border-t border-[#E5E2D9] pt-16">
              {AMENITIES.map((item, idx) => (
                <div key={idx} className="space-y-6 group">
                   <div className="w-10 h-10 flex items-center justify-center text-[#C5A059]">
                      <item.icon size={32} strokeWidth={1} />
                   </div>
                   <h4 className="text-xs uppercase tracking-[0.4em] font-bold text-[#1A2E44] block pb-2 border-b border-[#E5E2D9] group-hover:border-[#C5A059] transition-colors">{item.title}</h4>
                   <p className="text-sm text-gray-500 font-light leading-relaxed italic">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-10">
              {[1, 2, 3].map((i) => (
                <div key={i} className={cn("relative overflow-hidden group", i === 2 ? "md:scale-110 z-10 shadow-2xl" : "opacity-60 grayscale hover:grayscale-0 transition-all")}>
                  <img 
                    src={`https://picsum.photos/seed/luxury${i}/800/1000`} 
                    alt="Luxury Life" 
                    className="w-full aspect-[3/4] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 border-[20px] border-white/10" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Contact Form Section --- */}
        <section id="contact" className="py-32 px-6 md:px-10 bg-[#F2F0E8]/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              <div className="lg:col-span-5 space-y-12">
                <div className="space-y-6">
                  <h2 className="text-[11px] uppercase tracking-[0.5em] text-[#C5A059] font-black">Inquiry</h2>
                  <h3 className="text-4xl md:text-6xl font-serif italic text-[#1A2E44] leading-tight">Gửi yêu cầu <br /> cho cố vấn dự án</h3>
                  <p className="text-gray-500 font-light leading-relaxed max-w-sm italic">Để lại thông tin bên dưới, chuyên viên cấp cao sẽ liên hệ trực tiếp trong vòng 24h để cung cấp thông tin bảo mật nhất.</p>
                </div>

                <div className="space-y-8 border-l border-[#C5A059] pl-8">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold mb-2">Trung tâm hỗ trợ</div>
                    <div className="text-2xl font-serif italic text-[#1A2E44]">1900 23 23 89</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold mb-2">Văn phòng đại diện</div>
                    <div className="text-xs uppercase tracking-widest text-gray-600 leading-relaxed font-medium">Sale Gallery, Phước Thiện, <br /> TP. Thủ Đức, TP. Hồ Chí Minh</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="bg-white p-12 md:p-20 border border-[#E5E2D9] shadow-sm">
                  {formStatus === 'success' ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10"
                    >
                      <CheckCircle2 size={64} className="mx-auto text-[#C5A059] mb-8" />
                      <h4 className="text-3xl font-serif italic text-[#1A2E44] mb-4">Gửi thành công!</h4>
                      <p className="text-sm text-gray-500 font-light max-w-xs mx-auto">Chuyên viên của chúng tôi sẽ phản hồi yêu cầu của bạn qua Email hoặc Số điện thoại sơm nhất.</p>
                      <button onClick={() => setFormStatus('idle')} className="mt-10 text-[10px] uppercase tracking-widest underline font-bold">Quay lại</button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-12">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                         <div className="space-y-4">
                            <label className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400">Họ và tên</label>
                            <input 
                              required
                              type="text" 
                              className="w-full bg-transparent border-b border-[#E5E2D9] py-3 text-sm focus:border-[#C5A059] outline-none transition-colors font-serif italic"
                              placeholder="Trần Văn A"
                            />
                         </div>
                         <div className="space-y-4">
                            <label className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400">Số điện thoại</label>
                            <input 
                              required
                              type="tel" 
                              className="w-full bg-transparent border-b border-[#E5E2D9] py-3 text-sm focus:border-[#C5A059] outline-none transition-colors font-sans"
                              placeholder="+84 900 000 000"
                            />
                         </div>
                      </div>
                      
                      <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400">Địa chỉ Email</label>
                        <input 
                          required
                          type="email" 
                          className="w-full bg-transparent border-b border-[#E5E2D9] py-3 text-sm focus:border-[#C5A059] outline-none transition-colors font-sans"
                          placeholder="name@exclusive.com"
                        />
                      </div>

                      <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400">Ghi chú yêu cầu</label>
                        <textarea 
                          rows={2}
                          className="w-full bg-transparent border-b border-[#E5E2D9] py-3 text-sm focus:border-[#C5A059] outline-none transition-colors font-serif italic resize-none"
                          placeholder="Tôi muốn tìm hiểu về chính sách thanh toán sớm..."
                        ></textarea>
                      </div>

                      <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-gray-400 italic">
                        <div className="w-4 h-4 border border-[#E5E2D9] rounded-full flex items-center justify-center">
                           <div className="w-2 h-2 bg-[#C5A059] rounded-full" />
                        </div>
                        <span>Tôi cam kết các thông tin khai báo là chính xác</span>
                      </div>

                      <button 
                        type="submit" 
                        disabled={formStatus === 'submitting'}
                        className="w-full bg-[#1A2E44] text-white py-5 text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-[#C5A059] transition-all disabled:opacity-50"
                      >
                        {formStatus === 'submitting' ? 'ĐANG XỬ LÝ...' : 'Gửi Yêu Cầu Tư Vấn'}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-[#1A1A1A] text-white py-24 px-6 md:px-10 border-t border-[#E5E2D9]/10 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C5A059] rounded-sm flex items-center justify-center text-white font-bold text-xl italic">V</div>
              <span className="text-xs uppercase tracking-[0.3em] font-bold leading-tight">
                Vinhomes <br /> 
                <span className="text-[#C5A059]">Grand Park</span>
              </span>
            </div>
            <p className="text-white/30 text-xs uppercase tracking-[0.2em] max-w-sm leading-relaxed italic">The Metropolitan City - A Vision by Vingroup Corporation.</p>
          </div>

          <div className="flex flex-wrap gap-12 text-[10px] uppercase tracking-[0.3em] font-bold">
            <a href="#" className="hover:text-[#C5A059] transition-colors border-b border-transparent hover:border-[#C5A059] pb-1">Privacy</a>
            <a href="#" className="hover:text-[#C5A059] transition-colors border-b border-transparent hover:border-[#C5A059] pb-1">Terms</a>
            <a href="#" className="hover:text-[#C5A059] transition-colors border-b border-transparent hover:border-[#C5A059] pb-1">Legal Documents</a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] text-white/20 uppercase tracking-widest font-black">
          <p>© 2024 Vinhomes Grand Park Project · District 9 Office</p>
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span>Hotline: 1800 6000</span>
             </div>
             <p>Designed with Luxury Standards</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
