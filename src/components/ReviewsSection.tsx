"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, MessageSquare, X } from "lucide-react";

export default function ReviewsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [showAllModal, setShowAllModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const realReviews = [
    { name: "Arunava Halder", date: "Jun 13, 2026", review: "Working with Only Space - Dhrumit was an absolute pleasure. From start to finish, the process was smooth, professional, and stress-free. He was always prompt to my needs, provided good guidance, and went above and beyond to ensure all checks were in place. I highly recommend him to anyone looking for a reliable and trustworthy real estate broker service." },
    { name: "Amit Chowdhary", date: "Jul 03, 2026", review: "Great experience with Mr Dhrumit, he was very clear and honest from day one and got us the most perfect home we could have imagined." },
    { name: "Yatin Parikh", date: "Jul 11, 2026", review: "Dhrumitbhai's service is excellent and very co-operative nature, very good skill for connecting with owner and tenant also balancing both parties requirements." },
    { name: "Dhruv Sangal", date: "Jul 11, 2026", review: "Mr Dhurmit ji is very professional, helpful and cooperative person he was able to understand needs and execute them swiftly would recommend him." },
    { name: "Hardik Patel", date: "Feb 02, 2026", review: "It was a wonderful experience with Mr. Dhrumit. He is a friendly and reachable person. He provided multiple options for our requirements for a furnished rental in Shilaj area. Highly recommend him to anyone looking for a reliable and trustworthy broker in the Shilaj area." },
    { name: "Dharambir Kr Sharma", date: "Oct 04, 2025", review: "I had a wonderful experience working with Mr. Dhrumit. He not only helped me find a flat that perfectly matched my requirements but also assisted throughout the entire shifting process. He paid attention to even the smallest details and went above and beyond to ensure a smooth and hassle-free move, including coordinating the entry of household goods into the building. I truly appreciate his dedication and support." },
    { name: "Meet Vyas", date: "Apr 05, 2025", review: "I had a great experience working with Mr Dhrumit! He was incredibly helpful and responsive throughout the entire process of finding a rental apartment. He understood exactly what I was looking for and went above and beyond to find a place that matched my needs and budget. His knowledge of the area and the rental market made everything smooth and stress-free. I highly recommend him to anyone looking for a reliable and professional broker!" },
    { name: "Raunak Agarwal", date: "Feb 02, 2025", review: "Excellent and timely service Dhrumit Bhai. Not even a single call my side was missed. Timely and proper response. Acted as a great medium and communication channel between tenant and landlord. Great work on documentation. Transparent service" },
    { name: "Nimesh", date: "Dec 12, 2024", review: "Truly professional service by Dhrumit bhai. Was looking for a rental accommodation in Shilaj area, and found the perfect place within my budget with Dhrumit bhai help. Right from the start to finish, his dedicated service & attention to each & every minute detail is hard to find these days. I highly recommend him for anyone looking for similar services. Thanks Dhrumit bhai for all your help." },
    { name: "Jairajsinh Raulji", date: "Jan 28, 2025", review: "He is the best in business. Excellent service and a one stop solution guy. He has a getting things done attitude which is the best part about him." },
    { name: "Abhingya Patra", date: "Sep 08, 2023", review: "Dhrumit ji is excellent at making clients comfortable. Very jovial and accommodating, he took into consideration our requirements from a rental property and arranged for the best, within a day's time. Kudos to him. He's an absolute delight to work with." },
    { name: "Sandip Sadadiya", date: "May 28, 2022", review: "The way Dhrumit bhai work is always tremendous! He is always polite and always find good tenant within in time. He is soft spoken person and always respect person, he always believes customer is god. Thanks to Dhrumit and his team for always support. Blessing you.." },
    { name: "Chintan Patel", date: "Jan 02, 2024", review: "Dhrumitbhai, I wanted to share my feedback on the recent experience of renting out my house through your services. Overall, I appreciate your dedication and professionalism throughout the process. Positive aspects include timely communication, a thorough understanding of the local rental market, and efficient handling of paper work. Thank you for your assistance, and I look forward to continued collaboration." },
    { name: "Manankumar Halani", date: "Feb 26, 2025", review: "Exceptional service! The work was handled single-handedly with precision and accuracy. Outstanding support and flawless execution. Highly recommended." },
    { name: "Foram Vadodariya", date: "Apr 04, 2025", review: "He is such a good person also he believe in vastu and he provide you budgeted home and his service is very fast, Thanks Dhrumit" },
    { name: "Paavan Sharma", date: "May 31, 2022", review: "One stop solution for all property related issues. Thanks for the wonderful service and being kind." },
    { name: "Nidhi Gusai", date: "Jun 17, 2022", review: "Dhrumit bhai is well understanding person regarding customer requirement and that's why we suggest to everyone his name for property requirements. Thank you Dhrumit bhai for help us to find a good property in short time." },
    { name: "Bhavesh Desai", date: "Aug 26, 2022", review: "Dhrumit Bhai Good Person ,Loyal Man , Service Excellent," },
    { name: "Ashish Jain", date: "Dec 06, 2022", review: "Super helpful and intelligent, Dhrumit helped me place my property on rent within few days" },
    { name: "Monika Pawar", date: "Jan 18, 2024", review: "Dhrumit Bhai is the best. He is a great person and great agent. He helped us acquire a good tenant. We will definitely be working with him again in the future." },
    { name: "Arpit", date: "Oct 02, 2024", review: "Dhrumit Bhai is an awesome guy. He is a great person. He helped us acquire a good flat. We will definitely be working with him in future." },
    { name: "Riddhi Patel", date: "Jan 28, 2025", review: "Very good service, end to end documentation support and speedy work." },
    { name: "Kshitij Desai", date: "Jan 28, 2025", review: "Very good service, end to end documentation support and very nice and speedy work." },
    { name: "Kamlesh Patel", date: "Jan 28, 2025", review: "Very good service by Dhrumitbhai excellent fast working service" },
    { name: "Digant Maniyar", date: "Jan 30, 2025", review: "Great service Dhrumit bhai. Will definitely work for a long time in the future. Keep doing good work !!!" },
    { name: "Subodh", date: "Sep 18, 2025", review: "Excellent service and prompt service. Mr Dhrumit is very helpful and friendly person. I will recommend his services to others" },
    { name: "Ketan Acharya", date: "Dec 11, 2024", review: "I have long term relationship with Dhrumitbhai. A gentleman with excellent nature." },
    { name: "Dhagash Shah", date: "May 20, 2022", review: "Nice Service with proper commitments" },
    { name: "Vivek Dadhich", date: "May 20, 2022", review: "Meet service & commitment in one place !" },
    { name: "Jigar S Desai", date: "May 21, 2022", review: "Nice Service in Property search." },
    { name: "Shripal Gandhi", date: "Apr 14, 2023", review: "Very happy to be in touch with Dhrumit. Provided good property with expectations." },
    { name: "Ajay Parmar", date: "Aug 12, 2023", review: "This man gives him best for client." },
    { name: "Mohit T", date: "Jul 06, 2022", review: "Provides good deal as per expectations for all properties related requirements...Thanks" },
    { name: "Ritesh", date: "Jul 19, 2025", review: "It was nice an excellent service ! He showcased multiple options to choose from ! Thanks" },
    { name: "Shital Bhatt", date: "May 20, 2022", review: "Good work" },
    { name: "Nihir Patel", date: "May 20, 2022", review: "Good service" },
    { name: "Yash Darji", date: "May 20, 2022", review: "Nice service" },
    { name: "Alpesh Vala", date: "May 26, 2022", review: "Provide good service" },
    { name: "Ashish Rathore", date: "Jun 09, 2023", review: "Good Service and Polite Behavior" },
    { name: "Vinay Rajani", date: "Jul 04, 2025", review: "Very good service" }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(realReviews.length / itemsPerPage);
  const currentReviews = realReviews.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-transparent relative z-10 border-t border-neutral-900" id="reviews">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-900 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/40 text-gold px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
              <Star className="h-3.5 w-3.5 fill-gold text-gold" /> 5.0 Rating • 40+ Verified Client Reviews
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white">
              Customer Reviews &amp; Testimonials.
            </h2>
            <p className="font-sans text-xs tracking-wider text-grey max-w-xl leading-relaxed">
              Read authentic feedback from clients, homebuyers, and property owners who worked with <strong className="text-white">Only Space Realty</strong> and founder <strong className="text-white">Dhrumit Darji</strong>.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevPage}
              className="w-11 h-11 rounded-full bg-[#141414] border border-neutral-800 text-white hover:border-gold hover:text-gold flex items-center justify-center transition-all cursor-pointer shadow-md"
              aria-label="Previous Reviews"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="font-sans text-xs text-grey font-semibold">
              {currentPage + 1} / {totalPages}
            </span>
            <button
              onClick={nextPage}
              className="w-11 h-11 rounded-full bg-[#141414] border border-neutral-800 text-white hover:border-gold hover:text-gold flex items-center justify-center transition-all cursor-pointer shadow-md"
              aria-label="Next Reviews"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentReviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#121212] border border-neutral-800 hover:border-gold/40 rounded-3xl p-8 shadow-2xl flex flex-col justify-between space-y-6 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-[9px] text-grey font-mono uppercase tracking-wider">{rev.date}</span>
                </div>
                <Quote className="h-7 w-7 text-gold/30 group-hover:text-gold/60 transition-colors" />
                <p className="font-sans text-xs text-neutral-200 leading-relaxed italic">
                  &ldquo;{rev.review}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-900 flex items-center justify-between font-sans text-xs">
                <div>
                  <div className="font-serif font-bold text-white group-hover:text-gold transition-colors">{rev.name}</div>
                  <div className="text-[10px] text-grey">Ahmedabad Client</div>
                </div>
                <span className="inline-flex items-center gap-1 text-[9px] bg-neutral-900 border border-neutral-800 text-gold px-2.5 py-1 rounded-full font-bold">
                  <CheckCircle2 className="h-3 w-3 text-gold" /> Google Review
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Reviews Callout */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-900">
          <span className="text-xs text-grey">
            Displaying page {currentPage + 1} of {totalPages} ({realReviews.length} Verified Reviews)
          </span>
          <button
            onClick={() => setShowAllModal(true)}
            className="inline-flex items-center gap-2 bg-[#141414] hover:bg-gold text-white transition-all text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full border border-neutral-800 hover:border-gold cursor-pointer shadow-lg"
          >
            <MessageSquare className="h-4 w-4 text-gold" /> View All 40 Customer Reviews
          </button>
        </div>
      </div>

      {/* Full 40 Reviews Portal Modal (rendered directly on document.body with z-[99999]) */}
      {showAllModal && mounted && createPortal(
        <div
          onClick={() => setShowAllModal(false)}
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 overflow-hidden"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#121212] border border-gold/50 rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 shadow-[0_0_50px_rgba(201,169,106,0.3)] space-y-6 relative z-[100000]"
          >
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4 sticky top-0 bg-[#121212] z-30 pt-2">
              <div>
                <span className="text-[10px] text-gold uppercase tracking-widest font-bold">Client Testimonials</span>
                <h3 className="font-serif text-2xl font-bold text-white">All 40 Verified Google Reviews</h3>
              </div>
              <button
                onClick={() => setShowAllModal(false)}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-gold hover:text-white px-4 py-2 rounded-full bg-neutral-900 border border-neutral-700 cursor-pointer transition-all shadow-lg"
              >
                <X className="h-4 w-4" /> Close
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {realReviews.map((rev, idx) => (
                <div key={idx} className="bg-[#181818] p-5 rounded-2xl border border-neutral-800 space-y-3 hover:border-gold/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-gold">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                      ))}
                    </div>
                    <span className="text-[9px] text-grey font-mono">{rev.date}</span>
                  </div>
                  <p className="font-sans text-xs text-neutral-200 leading-relaxed italic">
                    &ldquo;{rev.review}&rdquo;
                  </p>
                  <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between">
                    <span className="font-serif font-bold text-xs text-white">{rev.name}</span>
                    <span className="text-[9px] text-gold font-bold">Google Verified</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
