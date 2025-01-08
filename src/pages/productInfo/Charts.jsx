import React from 'react';
import { Pie, Bar, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const FlowerChart = ({ flower }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-green-600 mb-4">{flower.title}</h2>
      <p className="mb-4 text-lg">{flower.description}</p>
      <Pie data={flower.chartData} className="max-w-xs mx-auto" />
      <p className="mt-6 text-center italic text-lg">{flower.catchyLine}</p>
      {flower.additionalChartData && (
        <div className="mt-8">
          <h3 className="text-2xl font-medium text-green-500 mb-4">Additional Benefits Breakdown</h3>
          <Bar data={flower.additionalChartData} className="max-w-md mx-auto" />
        </div>
      )}
      {flower.timingChartData && (
        <div className="mt-8">
          <h3 className="text-2xl font-medium text-green-500 mb-4">Best Time to Drink</h3>
          <Doughnut data={flower.timingChartData} className="max-w-md mx-auto" />
        </div>
      )}
      {flower.infoChartData && (
        <div className="mt-8">
          <h3 className="text-2xl font-medium text-green-500 mb-4">Key Flower Properties</h3>
          <Bar data={flower.infoChartData} className="max-w-md mx-auto" />
        </div>
      )}
    </div>
  );
};

const FlowerTeaBenefits = ({ selectedFlower }) => {
  const flowers = [
    {
      title: 'Chamomile',
      description: 'Calm your senses with the gentle touch of Chamomile. Known for its anti-inflammatory properties, it’s a natural elixir for skin, relaxation, and hormonal balance.',
      chartData: {
        labels: ['Beauty', 'Periods', 'Anti-aging', 'Maternity', 'Immunity', 'Mental Health'],
        datasets: [{
          data: [20, 25, 15, 20, 10, 10],
          backgroundColor: ['#FFDDC1', '#FFABAB', '#FFC3A0', '#D5AAFF', '#85E3FF', '#B9FBC0'],
        }],
      },
      additionalChartData: {
        labels: ['Sleep Improvement', 'Stress Relief', 'Digestive Health'],
        datasets: [{
          data: [30, 40, 30],
          backgroundColor: ['#FFD6A5', '#FF928B', '#B5EAEA'],
        }],
      },
      timingChartData: {
        labels: ['Morning', 'Afternoon', 'Evening'],
        datasets: [{
          data: [20, 30, 50],
          backgroundColor: ['#A3E4DB', '#F9D371', '#FFB3B3'],
        }],
      },
      infoChartData: {
        labels: ['Anti-inflammatory', 'Calming', 'Digestive Aid'],
        datasets: [{
          data: [40, 35, 25],
          backgroundColor: ['#FFDDC1', '#AFCBFF', '#FFC3A0'],
        }],
      },
      catchyLine: '✨ A cup of Chamomile is like a hug for your skin and soul.'
    },
    {
      title: 'Butterfly Pea',
      description: 'Brighten your day and skin with Butterfly Pea tea. It’s rich in antioxidants, promotes hair growth, and enhances brain function.',
      chartData: {
        labels: ['Beauty', 'Memory', 'Hair Growth', 'Vision', 'Calmness'],
        datasets: [{
          data: [30, 20, 25, 15, 10],
          backgroundColor: ['#B5EAEA', '#FFB3C1', '#FFC09F', '#E7C6FF', '#A3F7B5'],
        }],
      },
      additionalChartData: {
        labels: ['Brain Health', 'Hair Health', 'Eye Protection'],
        datasets: [{
          data: [35, 40, 25],
          backgroundColor: ['#AFCBFF', '#DABFFF', '#FFB3B3'],
        }],
      },
      timingChartData: {
        labels: ['Morning', 'Noon', 'Evening'],
        datasets: [{
          data: [30, 20, 50],
          backgroundColor: ['#FFD6A5', '#B5EAEA', '#FFB3B3'],
        }],
      },
      infoChartData: {
        labels: ['Antioxidant', 'Memory Boost', 'Calmness'],
        datasets: [{
          data: [40, 30, 30],
          backgroundColor: ['#FFD6A5', '#C1E1C1', '#FFB3B3'],
        }],
      },
      catchyLine: '🌸 Beauty in every sip, wellness in every bloom.'
    },
    {
      title: 'Moringa',
      description: 'Fuel your body with the power of Moringa. It boosts immunity, supports metabolism, and enhances skin vitality.',
      chartData: {
        labels: ['Immunity', 'Energy', 'Skin', 'Digestion', 'Muscle Growth'],
        datasets: [{
          data: [35, 30, 15, 10, 10],
          backgroundColor: ['#FFCF81', '#FFAFCC', '#A0C4FF', '#CDB4DB', '#9BF6FF'],
        }],
      },
      additionalChartData: {
        labels: ['Metabolism Boost', 'Detox', 'Bone Health'],
        datasets: [{
          data: [40, 35, 25],
          backgroundColor: ['#AFCBFF', '#FFC3A0', '#B5EAEA'],
        }],
      },
      timingChartData: {
        labels: ['Morning', 'Afternoon', 'Evening'],
        datasets: [{
          data: [40, 35, 25],
          backgroundColor: ['#FFD6A5', '#F9D371', '#FFB3B3'],
        }],
      },
      infoChartData: {
        labels: ['Nutrient-Rich', 'Detoxifying', 'Energy Boost'],
        datasets: [{
          data: [40, 30, 30],
          backgroundColor: ['#FFD6A5', '#B5EAEA', '#C1E1C1'],
        }],
      },
      catchyLine: '🌿 Moringa – nature’s gift for timeless beauty and vitality.'
    },
    {
      title: 'Rhododendron',
      description: 'Rhododendron tea, derived from Himalayan flowers, promotes cardiovascular health, reduces inflammation, and enhances skin glow.',
      chartData: {
        labels: ['Heart Health', 'Skin Glow', 'Anti-inflammatory', 'Immunity', 'Relaxation'],
        datasets: [{
          data: [25, 20, 20, 20, 15],
          backgroundColor: ['#F8B195', '#FFDDC1', '#C1E1C1', '#AFCBFF', '#FFC09F'],
        }],
      },
      additionalChartData: {
        labels: ['Detox', 'Anti-stress', 'Vitality'],
        datasets: [{
          data: [35, 40, 25],
          backgroundColor: ['#FF928B', '#B5EAEA', '#FFD6A5'],
        }],
      },
      timingChartData: {
        labels: ['Morning', 'Afternoon', 'Evening'],
        datasets: [{
          data: [30, 30, 40],
          backgroundColor: ['#C1E1C1', '#FFD6A5', '#F9D371'],
        }],
      },
      infoChartData: {
        labels: ['Anti-inflammatory', 'Calming', 'Heart Health'],
        datasets: [{
          data: [40, 30, 30],
          backgroundColor: ['#AFCBFF', '#B5EAEA', '#FFC3A0'],
        }],
      },
      catchyLine: '🌺 Rhododendron – A vibrant bloom for your heart and soul.'
    }
  ];

  const flower = flowers.find(f => f.title === selectedFlower);

  return (
    <div className="bg-pale-sage p-10 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-10">Flower and Herb Tea Benefits</h1>
      {flower ? <FlowerChart flower={flower} /> : <p className="text-center">Flower not found</p>}
    </div>
  );
};

export default FlowerTeaBenefits;
