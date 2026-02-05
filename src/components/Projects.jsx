export default function Projects() {
  return (
    <section id="projects" className="bg-gray-950 border-t border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-2xl font-bold tracking-tight">Projects</h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          
          {/* Project 1 */}
          <div className="rounded-xl border border-white/10 bg-gray-900 p-6">
            <h3 className="font-semibold">
              Top-k Sorting Under Partial Order Information
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Developed a Top-k sorting algorithm using DAG optimization and LLM-based
              inference to reduce expert involvement and improve ranking accuracy.
            </p>
            <p className="mt-3 text-xs text-gray-400">
              <span className="font-medium text-gray-300">Tech Stack:</span>{" "}
              Python, DAG Algorithms, LLM Inference, Ranking Systems
            </p>
          </div>

          {/* Project 2 */}
          <div className="rounded-xl border border-white/10 bg-gray-900 p-6">
            <h3 className="font-semibold">
              Emotion Recognition System (EmotionNet)
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Built a CNN-based deep learning model for real-time facial emotion
              detection and deployed it through a Flask-based web interface.
            </p>
            <p className="mt-3 text-xs text-gray-400">
              <span className="font-medium text-gray-300">Tech Stack:</span>{" "}
              Python, CNN, Deep Learning, OpenCV, Flask
            </p>
          </div>

          {/* Project 3 */}
          <div className="rounded-xl border border-white/10 bg-gray-900 p-6">
            <h3 className="font-semibold">
              Global Temperature Rise & Climate Correlations
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Machine learning–driven climate analysis using time-series modeling
              and causal inference to study the impact of CO₂ emissions on global
              temperature and sea level trends.
            </p>
            <p className="mt-3 text-xs text-gray-400">
              <span className="font-medium text-gray-300">Tech Stack:</span>{" "}
              Python, Time-Series Modeling, Machine Learning, Pandas, Statsmodels
            </p>
          </div>

          {/* Project 4 */}
          <div className="rounded-xl border border-white/10 bg-gray-900 p-6">
            <h3 className="font-semibold">
              Stock Price Prediction Using LSTM
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Implemented an LSTM-based recurrent neural network for stock price
              forecasting using historical time-series data and sequence learning.
            </p>
            <p className="mt-3 text-xs text-gray-400">
              <span className="font-medium text-gray-300">Tech Stack:</span>{" "}
              Python, LSTM, RNN, TensorFlow/Keras, Time-Series Forecasting
            </p>
          </div>

          {/* Project 5 */}
          <div className="rounded-xl border border-white/10 bg-gray-900 p-6">
            <h3 className="font-semibold">
              Trie-Based String Similarity Search Using Edit Distance
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Designed and implemented a trie-based approximate string matching
              system using edit distance and pruning techniques for efficient
              similarity search over large datasets.
            </p>
            <p className="mt-3 text-xs text-gray-400">
              <span className="font-medium text-gray-300">Tech Stack:</span>{" "}
              Java, Trie Data Structure, Edit Distance, Algorithms
            </p>
          </div>

          {/* Project 6 */}
          <div className="rounded-xl border border-white/10 bg-gray-900 p-6">
            <h3 className="font-semibold">
              AI-Powered Resume Matching System
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Built an AI-driven resume matching system that analyzes and ranks
              candidate resumes against job descriptions using NLP-based similarity
              modeling.
            </p>
            <p className="mt-3 text-xs text-gray-400">
              <span className="font-medium text-gray-300">Tech Stack:</span>{" "}
              Python, NLP, Embeddings, Cosine Similarity, Flask
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
