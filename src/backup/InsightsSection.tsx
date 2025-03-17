import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

interface InsightsSectionProps {
  title?: string;
  subtitle?: string;
  blogs?: Array<{
    id: string;
    title: string;
    excerpt: string;
    date: string;
    imageUrl: string;
    fullContent?: string;
  }>;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  fullContent?: string;
}

const InsightsSection = ({
  title = "Financial Insights",
  subtitle = "Stay informed with our latest financial perspectives and market analyses",
  blogs = [
    {
      id: "1",
      title:
        "Unlocking Global Success: The Power of International Reach Without Compliance Headaches",
      excerpt:
        "In an era where borders are becoming less of a barrier to business, the ability to operate internationally with ease is a game-changer.",
      date: "March 12, 2025",
      imageUrl:
        "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=800&q=80",
      fullContent: `In an era where borders are becoming less of a barrier to business, the ability to operate internationally with ease is a game-changer. Yet, the complexities of moving money across jurisdictions—fraught with compliance challenges and logistical hurdles—can slow down even the most promising ventures. This is where a robust financial infrastructure, like that offered by PayNomad Capital, steps in, providing the tools and connectivity needed to ensure money flows fluidly, fueling growth and scale on a global stage. 

Why International Reach Matters
For businesses, governments, and high-net-worth individuals (HNWIs), international reach is more than just a buzzword—it's a strategic necessity. The ability to tap into new markets, secure partnerships, and manage multi-jurisdictional assets hinges on one critical factor: the momentum of money. When funds are delayed by regulatory red tape, high fees, or outdated systems, opportunities slip away. The velocity of money—its ability to move quickly and efficiently—directly impacts an organization's capacity to seize opportunities and maintain a competitive edge. 

Overcoming Compliance Headaches
Navigating the global financial landscape can feel like a maze. Each country has its own regulatory framework, from anti-money laundering (AML) laws to local tax requirements, making compliance a daunting task. Traditional financial systems often exacerbate these issues with slow processing times and limited flexibility. PayNomad Capital addresses this head-on with a financial infrastructure designed to simplify compliance while ensuring seamless money movement. Operating under a Money Service Business (MSB) license from Canada's FINTRAC, PayNomad Capital adheres to rigorous global standards, giving clients confidence that their transactions are both secure and compliant, no matter where they're conducted. 

Tools for Fluid Money Movement
PayNomad's strength lies in its ability to provide the right tools for each jurisdiction. Whether it's multi-currency accounts for managing funds in various fiat currencies, non-custodial digital wallets for cryptocurrency transactions, or cross-border payment solutions like SWIFT, ACH, Interac e-Transfer, and IBANs, PayNomad ensures connectivity across diverse financial networks. These digital options empower clients to move money fluidly, adapting to the unique demands of each market. For businesses scaling internationally or HNWIs managing complex portfolios, this flexibility is invaluable—keeping capital in motion and operations running smoothly.

The Significance for Growth and Scale
The impact of this infrastructure on international business cannot be overstated. With PayNomad's global reach, companies can expand into new regions without the usual friction of financial bottlenecks. Lower transaction costs, faster processing times, and regulatory peace of mind allow businesses to focus on what matters: growth. For governments and institutional clients, the ability to execute large-scale international transfers efficiently supports economic initiatives and cross-border collaboration. Meanwhile, private clients benefit from tailored solutions that preserve wealth across generations, all while maintaining compliance and security.

A Foundation for Global Ambition
In today's fast-paced economy, the significance of international reach without compliance headaches is clear—it's the foundation for sustainable growth and scale. PayNomad Capital's financial infrastructure delivers exactly that, offering the connectivity, tools, and expertise to keep money moving at the speed of business. By bridging jurisdictions and simplifying the complexities of global finance, PayNomad empowers its clients to thrive in a borderless world, turning ambition into action with every transaction.`,
    },
    {
      id: "2",
      title: "Key Trends Transforming the Financial Services Sector in Canada",
      excerpt:
        "The financial services sector in Canada is undergoing a period of rapid transformation, driven by technological advancements and shifting consumer expectations.",
      date: "February 28, 2025",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      fullContent: `The financial services sector in Canada is undergoing a period of rapid transformation, driven by technological advancements, shifting consumer expectations, and an evolving regulatory landscape. These changes are reshaping how financial institutions operate, innovate, and deliver value to clients. Below are four key trends defining the future of the sector and influencing its operational and compliance strategies. 

1. The Emergence of Fintech Innovations
The rise of fintech has disrupted the traditional financial services landscape, introducing innovative tools like digital wallets, peer-to-peer payment platforms, and robo-advisors. These solutions are enhancing accessibility and efficiency for consumers and businesses alike. Companies such as PayNomad Capital are leading this charge, harnessing cutting-edge technology to offer secure, user-friendly financial services while maintaining strict regulatory compliance. This blend of innovation and adherence to standards is setting a new pace for the industry, enabling firms to scale responsibly and meet growing market demands. 

2. The Expansion of Cryptocurrency and Digital Assets
The increasing adoption of cryptocurrencies and blockchain technology is creating new opportunities and complexities within the financial services sector. As digital assets gain traction, institutions must comply with rigorous regulations to combat fraud, money laundering, and security risks. Financial firms like PayNomad Capital are at the forefront, integrating compliant and secure solutions for managing digital assets. By prioritizing regulatory alignment, these organizations foster trust among investors, regulators, and consumers, contributing to a more robust and credible digital economy. 

3. Advancements in Cross-Border Payment Solutions
Canada's diverse, globally connected population has heightened the need for fast, cost-effective, and secure international money transfer services. Financial institutions are responding with innovative cross-border payment solutions that streamline transactions and enhance financial inclusion. PayNomad Capital, for instance, excels in this space by offering advanced services that facilitate seamless international transfers for individuals and businesses. These efforts not only bridge financial gaps but also reinforce Canada's role as a key player in global commerce. 

4. The Integration of Digital Compliance Tools
Navigating the intricate regulatory environment is a critical challenge for financial institutions, and many are turning to digital tools to stay ahead. Technologies such as artificial intelligence (AI), machine learning, and blockchain are being leveraged to bolster compliance, reduce risks, and optimize operations. Companies like PayNomad Capital utilize these tools to ensure adherence to regulations, such as those enforced by FINTRAC, while enhancing security and efficiency. This tech-driven approach allows firms to maintain high standards of integrity while delivering exceptional service.`,
    },
    {
      id: "3",
      title:
        "Wealth Preservation Techniques for the Ultra-High-Net-Worth Individual (UHNWI)",
      excerpt:
        "In an era marked by economic volatility, geopolitical uncertainty, and rapid technological change, the preservation of wealth has become a paramount concern.",
      date: "February 14, 2025",
      imageUrl:
        "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80",
      fullContent: `In an era marked by economic volatility, geopolitical uncertainty, and rapid technological change, the preservation of wealth has become a paramount concern for ultra-high-net-worth individuals (UHNWIs). With assets exceeding $30 million, UHNWIs face unique challenges in safeguarding their capital while ensuring its growth across generations. A defensive strategy, anchored in sophisticated preservation techniques and supported by trusted institutions, is essential for navigating these complexities. This article explores key strategies that UHNWIs can employ to protect their wealth and highlights the critical role of partnering with experienced financial institutions to achieve long-term security. 

The Imperative of Wealth Preservation
For UHNWIs, wealth preservation is not merely about maintaining capital—it is about creating a legacy that withstands the test of time. Uncertain times demand a proactive approach to asset protection, one that balances growth with risk mitigation. A well-structured defensive strategy ensures that wealth is shielded from market downturns, legal liabilities, and unforeseen events, while still allowing for strategic opportunities to enhance returns. Central to this approach is the collaboration with institutions that possess the expertise, integrity, and global reach to tailor solutions to the unique needs of UHNWIs. 

Sophisticated Preservation Techniques

UHNWIs can leverage a range of advanced techniques to preserve and grow their wealth:

* Diversification Across Asset Classes and Geographies Diversification remains a cornerstone of wealth preservation. By spreading investments across traditional assets (e.g., equities, bonds, real estate) and alternative investments (e.g., private equity, hedge funds, digital assets), UHNWIs can reduce exposure to market-specific risks. Geographic diversification further enhances protection by mitigating the impact of regional economic downturns. Institutions offering tailored investment solutions, such as PayNomad Capital Ltd., provide access to global markets and bespoke portfolios designed to align with each client's risk tolerance and long-term objectives. 
* Strategic Asset Allocation and Rebalancing A disciplined approach to asset allocation ensures that portfolios remain aligned with an UHNWI's financial goals and risk profile. Regular rebalancing, guided by expert advisors, helps maintain the desired risk-return balance, especially during periods of market volatility. This technique not only preserves capital but also positions the portfolio to capture growth opportunities in a controlled manner. 
* Tax Optimization and Structuring Efficient tax planning is critical for preserving wealth, particularly for UHNWIs with complex, multi-jurisdictional assets. Techniques such as tax-efficient investment vehicles, charitable trusts, and offshore structures can minimize tax liabilities while ensuring compliance with global regulations. Trusted institutions with expertise in cross-border tax strategies can provide invaluable guidance in this area, helping UHNWIs retain more of their wealth for future generations. 
* Estate Planning and Succession Strategies Preserving wealth across generations requires meticulous estate planning. Tools such as family trusts, foundations, and wills ensure that assets are transferred according to the UHNWI's wishes while minimizing estate taxes and avoiding probate. Institutions like PayNomad Capital Ltd. specialize in creating customized estate plans that reflect the unique dynamics of each family, ensuring a seamless transition of wealth and values. 
* Risk Management and Asset Protection UHNWIs must safeguard their assets from legal liabilities, creditor claims, and other external threats. Techniques such as asset protection trusts, limited liability entities, and insurance solutions (e.g., umbrella policies, captive insurance) provide layers of defense. Corporate services, including the formation of holding companies and offshore entities, further enhance protection by isolating assets from potential risks. PayNomad Capital Ltd. offers comprehensive corporate services that enable UHNWIs to structure their holdings in a way that maximizes both protection and operational efficiency. 
* Philanthropy as a Preservation Tool Strategic philanthropy not only fulfills social responsibility but also serves as a wealth preservation tool. Charitable foundations and donor-advised funds offer tax advantages while allowing UHNWIs to create a lasting legacy. Institutions with expertise in philanthropic planning can help align charitable giving with broader wealth preservation goals.

The Role of Trusted Institutions
In the pursuit of wealth preservation, partnering with a trusted institution is indispensable. UHNWIs require advisors who understand the intricacies of their financial landscape and can offer solutions that are both innovative and compliant with global regulations. Institutions like PayNomad Capital Ltd., regulated under Canadian law and licensed as a Money Service Business (MSB) by FINTRAC, exemplify the reliability and expertise needed for such partnerships. With a commitment to transparency, security, and client-centric service, PayNomad Capital provides UHNWIs with access to a suite of services—from secure currency exchange and international fund transfers to tailored corporate solutions—all designed to protect and grow wealth in a volatile world. 

Moreover, trusted institutions offer the benefit of continuity. As UHNWIs plan for generational wealth transfer, they need partners who can support their families over the long term, ensuring that their defensive strategy evolves with changing circumstances. PayNomad Capital's focus on building enduring relationships, coupled with its global network and regulatory adherence, positions it as a valuable ally in this journey.

A Proactive Approach to Legacy Building
Wealth preservation is not a passive endeavor—it requires vigilance, foresight, and the right partnerships. For UHNWIs, the stakes are high, but so are the opportunities to create a lasting financial legacy. By embracing sophisticated preservation techniques and working with institutions that prioritize their unique needs, UHNWIs can protect their assets, navigate uncertainty, and ensure that their wealth endures for generations to come. 

In this context, PayNomad Capital Ltd. stands ready to assist UHNWIs in facilitating their wealth preservation needs with financial solutions and corporate services.  With a deep understanding of the challenges faced by affluent clients and a commitment to excellence, PayNomad Capital offers the expertise and resources needed to safeguard wealth in an ever-changing world.`,
    },
    {
      id: "4",
      title:
        "The Rise of Cryptocurrency: A Paradigm Shift in Institutional Adoption and PayNomad's Strategic Role",
      excerpt:
        "The financial landscape is undergoing a profound transformation as governments and regulators increasingly embrace cryptocurrencies.",
      date: "February 1, 2025",
      imageUrl:
        "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80",
      fullContent: `The financial landscape is undergoing a profound transformation as governments and regulators increasingly embrace cryptocurrencies. This growing acceptance has fostered unprecedented trust and confidence among financial institutions, prompting them to integrate cryptocurrencies and digital assets into their portfolios. What was once a speculative fringe is now signaling a paradigm shift toward mainstream institutional adoption. In this evolving ecosystem, PayNomad Capital Ltd. emerges as a key player, strategically positioned to serve institutional clients, governments, and high-net-worth individuals (HNWIs) and ultra-high-net-worth individuals (UHNWIs). This article explores how regulatory advancements are driving this change and how PayNomad is capitalizing on these trends to deliver tailored financial solutions. 

The Regulatory Renaissance: A Foundation for Trust
Governments and regulators worldwide are shifting from skepticism to proactive engagement with cryptocurrencies, creating a more stable and legitimate environment for digital assets. Notable milestones, such as the U.S. Securities and Exchange Commission's (SEC) approval of Bitcoin Exchange-Traded Funds (ETFs) and the European Union's Markets in Crypto-Assets (MiCA) regulation, exemplify this trend. These frameworks reduce risks like fraud and market manipulation, providing the clarity that financial institutions have long sought. 

This regulatory evolution has been a game-changer for trust. A 2023 Fidelity Digital Assets survey found that 74% of institutional investors are now interested in digital assets, with regulatory certainty being a primary motivator. When governments signal acceptance through structured oversight, financial institutions gain the confidence to explore cryptocurrencies as a credible investment class, setting the stage for widespread adoption. 

Institutional Adoption: A New Financial Frontier
The ripple effect of regulatory acceptance is evident in the actions of financial institutions, which are increasingly incorporating cryptocurrencies into their portfolios. Industry giants like JPMorgan, Goldman Sachs, and BlackRock have introduced cryptocurrency-related services, including custody solutions and investment vehicles. This shift reflects a broader trend driven by three key factors:
* Diversification and Returns: Cryptocurrencies offer a unique asset class with the potential for significant returns. Bitcoin, for example, has outperformed traditional assets like gold over the past decade, making it an appealing option for institutions seeking growth.
* Client Demand: HNWIs and UHNWIs are driving demand for digital asset exposure within their wealth management strategies, pushing institutions to adapt or risk losing market share.
* Technological Innovation: Blockchain, the technology underpinning cryptocurrencies, enables advancements in payments, smart contracts, and decentralized finance (DeFi), which institutions are leveraging to enhance their offerings.

While challenges such as volatility and cybersecurity remain, the benefits of diversification and competitive positioning outweigh the risks. This institutional embrace is maturing the cryptocurrency market, cementing digital assets as a permanent fixture in modern finance.

Governments as Catalysts: Beyond Regulation
Governments are not just regulating cryptocurrencies—they're exploring their potential as tools for innovation. Central Bank Digital Currencies (CBDCs), being tested in countries like Canada, China, and the Bahamas, aim to modernize financial systems and improve accessibility. This forward-thinking approach reinforces confidence among institutions and private clients alike, signaling that digital assets are here to stay.

For HNWIs and UHNWIs, this governmental involvement adds a layer of security and legitimacy. It also creates new opportunities for wealth preservation and growth, particularly in an era of economic uncertainty. As digital assets gain traction in national strategies, they become an essential consideration for sophisticated investors.

PayNomad Capital: A Trusted Partner in the Digital Age
Amid this seismic shift, PayNomad Capital Ltd., a Canadian financial services firm regulated by the Financial Transactions and Reports Analysis Centre of Canada (FINTRAC), is uniquely positioned to bridge the gap between traditional finance and the digital frontier. With a focus on compliance, security, and client-centric solutions, PayNomad serves three critical segments:
* Institutional Clients: PayNomad offers secure, compliant digital asset management, including custody and portfolio integration. Its expertise in navigating regulatory complexities enables institutions to adopt cryptocurrencies confidently while managing risks effectively.
* Governments: With a deep understanding of regulatory frameworks and cross-border transactions, PayNomad is an ideal partner for governments exploring CBDCs or digital asset initiatives. Its commitment to transparency aligns with public-sector needs, fostering trust in collaborative efforts.
* Private Clients (HNWIs and UHNWIs): PayNomad provides bespoke wealth management services, integrating digital assets into strategies tailored to individual risk profiles and goals. Its non-custodial digital wallets and multi-currency accounts offer flexibility and security, empowering clients to thrive in a dynamic market.

PayNomad's strategic positioning ensures that its clients—whether institutional, governmental, or private—are equipped to seize the opportunities of this transformative era while maintaining the highest standards of trust and compliance. 

Embracing a New Financial Reality
The growing acceptance of cryptocurrencies by governments and regulators has ignited a wave of trust and confidence, propelling financial institutions toward widespread adoption. As digital assets become integral to portfolios, the financial services sector is entering a new era of innovation and opportunity. For institutions, governments, and HNWIs/UHNWIs, partnering with a forward-thinking firm like PayNomad Capital is key to navigating this landscape. With its strategic focus and tailored solutions, PayNomad is not just adapting to the future of finance—it's helping to shape it.`,
    },
    {
      id: "5",
      title: "The Future of Digital Finance for UHNWI & Global Citizen",
      excerpt:
        "The future of digital finance for ultra-high-net-worth individuals (UHNWIs) and global citizens is a rapidly evolving domain marked by transformative technological advancements.",
      date: "January 20, 2025",
      imageUrl:
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
      fullContent: `The future of digital finance for ultra-high-net-worth individuals (UHNWIs) and global citizens is a rapidly evolving domain marked by transformative technological advancements and shifting economic paradigms. As digital finance increasingly facilitates greater access to financial services, it holds significant implications for wealth management, financial inclusion, and global economic stability. 

This evolution is particularly noteworthy as it empowers underserved populations while presenting unique opportunities for UHNWIs, who navigate a complex financial landscape characterized by self-made wealth and a growing emphasis on health and wellness investments. Digital finance leverages technologies such as blockchain, artificial intelligence, and mobile platforms to enhance the efficiency and security of financial transactions. These innovations promise to reduce costs and improve the accessibility of financial services, particularly in developing economies where traditional banking infrastructure is often lacking. PayNomad secures client transactions through advanced encryption and blockchain technology, while maintaining strict compliance with global financial regulations to offer a superior digital finance experience.

Moreover, the integration of luxury fintech solutions is reshaping how UHNWIs manage their wealth, allowing for personalized and streamlined investment strategies that respond to the unique needs of affluent clients.

However, the proliferation of digital finance is not without challenges. Regulatory compliance, cybersecurity risks, and economic inequalities remain prominent concerns as the sector navigates a complex regulatory landscape. Canada, recognized as one of the safest jurisdictions for financial services due to its robust regulatory framework, provides a secure environment for companies like PayNomad Capital Ltd., which adheres strictly to Canadian laws and operates under the regulation of FINTRAC. Financial institutions must adapt to evolving regulations while addressing the threats posed by cyberattacks, which disproportionately affect those with significant digital assets. Additionally, disparities in digital and financial literacy across different regions can hinder the widespread adoption of fintech innovations, limiting their potential benefits for global citizens.

Overall, the future of digital finance is poised to significantly reshape wealth management strategies and economic participation on a global scale, necessitating a concerted effort from policymakers, financial institutions, and individuals to maximize its potential while addressing inherent risks. Through international cooperation and a focus on inclusivity, digital finance can serve as a catalyst for empowerment and economic growth, ultimately benefiting both UHNWIs and marginalized communities worldwide.`,
    },
    {
      id: "6",
      title: "Understanding the Money Service Business License in Canada",
      excerpt:
        "A Money Service Business (MSB) license is a cornerstone of regulatory oversight for businesses engaged in specific financial activities across Canada.",
      date: "January 10, 2025",
      imageUrl:
        "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&q=80",
      fullContent: `A Money Service Business (MSB) license is a cornerstone of regulatory oversight for businesses engaged in specific financial activities across Canada. Administered by the Financial Transactions and Reports Analysis Centre of Canada (FINTRAC), this license ensures that companies comply with anti-money laundering (AML) and counter-terrorist financing (CTF) laws. These regulations are designed to safeguard the integrity of Canada's financial system, preventing illicit activities from undermining legitimate transactions and maintaining public confidence in the nation's economic framework. 

The scope of the MSB license covers a range of financial services, including currency exchange, fund transfers, remittance services, and transactions involving virtual currencies. Any business providing these offerings must register as an MSB to operate legally within Canada. Far from being a mere administrative hurdle, this registration process signals a company's commitment to transparency, accountability, and ethical financial practices. For example, businesses like PayNomad Capital Ltd., which hold an MSB license, demonstrate their dedication to operating within a robust regulatory framework that prioritizes the protection of clients' financial assets. This involves adhering to strict FINTRAC guidelines, such as conducting thorough client identity verification and maintaining detailed records of transactions to detect and deter potential risks. 

The process of obtaining and maintaining an MSB license is rigorous, requiring businesses to implement comprehensive compliance programs. These programs include ongoing employee training, regular audits, and the appointment of a compliance officer to oversee adherence to FINTRAC standards. For clients, this translates into a heightened level of security, as licensed MSBs are equipped to monitor transactions for suspicious activity and report it promptly to authorities. In the case of PayNomad Capital Ltd., this regulatory diligence ensures that clients' funds are shielded from fraud and unauthorized access, offering peace of mind in an increasingly complex financial landscape. 

Beyond its role in compliance, an MSB license serves as a powerful signal of credibility within the financial sector. It reassures customers, business partners, and financial institutions that a company operates with integrity and reliability—qualities that are essential in building and sustaining trust. For instance, PayNomad Capital Ltd. leverages its MSB license to provide high-level services such as secure currency exchange, international fund transfers, and virtual currency transactions. These offerings are executed under FINTRAC's stringent oversight, ensuring that every transaction is conducted with the utmost security and compliance. This is particularly valuable for high-net-worth individuals who rely on tailored financial solutions and expect their assets to be safeguarded by advanced protective measures. 

The competitive nature of the financial services industry, coupled with the rapid evolution of digital technologies, further underscores the importance of the MSB license. Companies that hold this license are better positioned to adapt to emerging challenges, such as cyber threats and the growing prevalence of virtual currencies. PayNomad Capital Ltd., for example, invests in cutting-edge security technologies and regularly updates its systems to stay ahead of potential vulnerabilities. This proactive approach, rooted in its MSB obligations, reinforces the company's ability to protect clients' financial assets while delivering services that meet the sophisticated demands of today's market. 

In essence, the MSB license is more than a regulatory requirement—it is a foundation for trust, security, and professionalism in Canada's financial ecosystem. For businesses like PayNomad Capital Ltd., it underpins a commitment to excellence, ensuring that clients benefit from both high-level financial services and the confidence that their assets are protected in a dynamic and ever-evolving industry.`,
    },
  ],
}: InsightsSectionProps) => {
  // Define state variables with proper initialization
  const [visibleCount, setVisibleCount] = useState<number>(3);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize component on mount
  useEffect(() => {
    // Ensure blogs are properly loaded before rendering
    if (blogs && Array.isArray(blogs) && blogs.length > 0) {
      setIsLoaded(true);
    }
  }, [blogs]);

  // Compute visible blogs based on the count
  const visibleBlogs = useMemo(() => {
    return blogs ? blogs.slice(0, visibleCount) : [];
  }, [blogs, visibleCount]);

  // Function to truncate titles to ensure they're no more than 2 lines
  const truncateTitle = (title: string): string => {
    const words = title.split(" ");
    if (words.length <= 10) return title;

    // Find a good breaking point
    const firstPart = words.slice(0, Math.min(8, Math.floor(words.length / 2)));
    return `${firstPart.join(" ")}...`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleViewAllInsights = () => {
    // Show all blogs when the button is clicked
    try {
      console.log(
        "View All clicked, current count:",
        visibleCount,
        "total blogs:",
        blogs?.length || 0,
      );
      if (blogs && Array.isArray(blogs)) {
        setVisibleCount(blogs.length);
      }
    } catch (error) {
      console.error("Error in handleViewAllInsights:", error);
    }
  };

  const handleBlogClick = (blog: BlogPost) => {
    setSelectedBlog(blog);
    setDialogOpen(true);
  };

  return (
    <section className="w-full py-24 bg-[#f8f9fa]" id="insights">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl font-bold text-[#0077be] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {title}
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Proxima Nova', sans-serif" }}
          >
            {subtitle}
          </p>
        </motion.div>

        {isLoaded && visibleBlogs && visibleBlogs.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full"
          >
            {visibleBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                variants={itemVariants}
                className="w-full max-w-[380px]"
              >
                <BlogCard
                  title={truncateTitle(blog.title)}
                  excerpt={blog.excerpt}
                  date={blog.date}
                  imageUrl={blog.imageUrl}
                  onClick={() => handleBlogClick(blog)}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="flex justify-center items-center py-20">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-300 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-300 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-300 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-center"
        >
          {blogs && Array.isArray(blogs) && visibleCount < blogs.length && (
            <button
              className="px-8 py-3 bg-[#0077be] text-white rounded hover:bg-[#005f9e] transition-colors duration-300 font-medium"
              onClick={handleViewAllInsights}
            >
              View All Insights
            </button>
          )}
        </motion.div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          {selectedBlog && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-[#2c3e50]">
                  {selectedBlog.title}
                </DialogTitle>
                <DialogDescription className="text-gray-500">
                  {selectedBlog.date}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 prose max-w-none">
                <div className="mb-6">
                  <img
                    src={selectedBlog.imageUrl.replace(
                      "w=800&q=80",
                      "w=1200&q=90",
                    )}
                    alt={selectedBlog.title}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                </div>
                {selectedBlog.fullContent
                  ?.split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default InsightsSection;
