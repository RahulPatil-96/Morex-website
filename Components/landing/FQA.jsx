import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { analytics } from '@/lib/dummyAnalytics';

const faqData = [
  {
    category: 'Implementation',
    questions: [
      {
        question: 'How long does implementation take?',
        answer: 'Implementation typically takes 2-4 weeks depending on your factory size and complexity. The process includes data migration, system configuration, staff training, and a pilot run. Our team works closely with you to ensure a smooth transition with minimal disruption to your operations.'
      },
      {
        question: 'Do I need to stop my factory operations during implementation?',
        answer: 'No, you don\'t need to stop operations. We implement the system in phases, running it parallel to your existing processes initially. Once you\'re comfortable and data is verified, we smoothly transition to full system use. Most clients experience zero downtime during implementation.'
      },
      {
        question: 'Can you migrate data from my existing system?',
        answer: 'Yes, we handle complete data migration from spreadsheets, other software, or manual records. Our team will import your existing products, formulations, customer data, and historical orders. We ensure 100% data accuracy through validation checks at each stage.'
      },
      {
        question: 'What if I have custom processes specific to my factory?',
        answer: 'Morex Technologies is highly configurable to match your unique workflows. During implementation, we customize the system to fit your specific processes, approval hierarchies, and business rules. For enterprise clients, we can develop custom features tailored to your exact requirements.'
      }
    ]
  },
  {
    category: 'Training & Support',
    questions: [
      {
        question: 'How much training do my staff need?',
        answer: 'We provide comprehensive training covering all system features. Basic users need 2-3 hours, while power users (production managers, admin) need 1-2 days. Training is conducted in batches at your factory, and we provide video tutorials and documentation for ongoing reference.'
      },
      {
        question: 'What support do you provide after implementation?',
        answer: 'All plans include email and phone support. Professional plans get priority support with faster response times. Enterprise clients receive 24/7 dedicated support with a named account manager. We also provide regular system health checks and optimization recommendations.'
      },
      {
        question: 'Do you provide training in regional languages?',
        answer: 'Yes! We understand that factory staff may be more comfortable in regional languages. We provide training and user interface in Hindi, Marathi, Gujarati, Tamil, Telugu, and other major Indian languages. Documentation and help resources are also available in multiple languages.'
      },
      {
        question: 'Is there ongoing training for new features?',
        answer: 'Absolutely. Whenever we release new features, we provide update training sessions (both live webinars and recorded videos). All training materials are updated and accessible through our learning portal. Your team can learn at their own pace.'
      }
    ]
  },
  {
    category: 'Technical & Security',
    questions: [
      {
        question: 'Is my formulation data secure?',
        answer: 'Yes, we take data security extremely seriously. Your formulations and business data are encrypted using bank-grade encryption (AES-256). Data is stored in secure cloud servers with daily backups. Access controls ensure only authorized personnel can view sensitive formulations.'
      },
      {
        question: 'Can I access the system from my mobile phone?',
        answer: 'Yes, Morex Technologies is fully mobile-responsive and works on smartphones and tablets. We also provide native iOS and Android apps for enhanced mobile experience. You can approve orders, check inventory, view reports, and even update formulations from anywhere.'
      },
      {
        question: 'What happens if the internet connection goes down?',
        answer: 'The system requires internet for cloud access. However, we provide offline mode for critical functions like production batch calculations and quality checks. Data automatically syncs when connection is restored. We recommend a backup internet connection (mobile hotspot) for uninterrupted access.'
      },
      {
        question: 'Can I integrate with my existing accounting software?',
        answer: 'Yes, we offer integrations with popular accounting software like Tally, Zoho Books, and QuickBooks. The system can export invoices, purchase orders, and financial data in formats compatible with your accounting system. Enterprise plans include custom API integration options.'
      }
    ]
  },
  {
    category: 'Pricing & Commitment',
    questions: [
      {
        question: 'Is there a long-term contract commitment?',
        answer: 'No long-term lock-in required. While we offer discounts for annual commitments, you can start with monthly billing. We\'re confident you\'ll see value and choose to continue. We also offer a 30-day money-back guarantee if you\'re not satisfied.'
      },
      {
        question: 'Are there any hidden costs or setup fees?',
        answer: 'No hidden costs. The monthly price includes everything: software, cloud hosting, updates, training, and support. One-time implementation fees (data migration, customization) are clearly communicated upfront. There are no surprise charges later.'
      },
      {
        question: 'Can I upgrade or downgrade my plan?',
        answer: 'Yes, you can change plans anytime. Upgrading is instant with pro-rated billing. Downgrading takes effect at your next billing cycle. As your factory grows, you can seamlessly move from Starter to Professional to Enterprise without data migration.'
      },
      {
        question: 'What happens to my data if I cancel?',
        answer: 'Your data is always yours. If you decide to cancel, we provide complete data export in standard formats (Excel, CSV, JSON). You can download all your formulations, orders, customer data, and reports. We retain your data for 90 days post-cancellation for reactivation if needed.'
      }
    ]
  }
];

function FAQItem({ question, answer, index, categoryIndex, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border border-slate-700/50 rounded-xl overflow-hidden bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
    >
      <button
        onClick={() => {
          onToggle();
          if (!isOpen) {
            analytics.track({
              eventName: 'faq_opened',
              properties: { question: question.substring(0, 50) }
            });
          }
        }}
        className="w-full px-6 py-5 flex items-center justify-between text-left group"
      >
        <span className="text-white font-medium pr-8 group-hover:text-cyan-400 transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-slate-400 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            Frequently Asked Questions
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Got Questions?
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              We Have Answers
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about implementing Morex Technologies in your paint factory
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqData.map((category, categoryIndex) => (
            <div key={category.category}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
              </motion.div>

              <div className="space-y-3">
                {category.questions.map((faq, questionIndex) => (
                  <FAQItem
                    key={questionIndex}
                    question={faq.question}
                    answer={faq.answer}
                    index={questionIndex}
                    categoryIndex={categoryIndex}
                    isOpen={openItems[`${categoryIndex}-${questionIndex}`]}
                    onToggle={() => toggleItem(categoryIndex, questionIndex)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            Still have questions?
          </h3>
          <p className="text-slate-400 mb-6">
            Our team is here to help you understand how Morex Technologies can transform your paint manufacturing business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:info@morextech.com"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
              onClick={() => analytics.track({
                eventName: 'faq_contact_clicked',
                properties: { method: 'email' }
              })}
            >
              info@morextech.com
            </a>
            <span className="text-slate-600 hidden sm:block">•</span>
            <a
              href="tel:+919876543210"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
              onClick={() => analytics.track({
                eventName: 'faq_contact_clicked',
                properties: { method: 'phone' }
              })}
            >
              +91 98765 43210
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}