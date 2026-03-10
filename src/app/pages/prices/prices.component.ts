import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

export interface PriceRow {
  model: string;
  modelNote?: number;
  maxFlow: number;
  noScrews: number;
  filterPrice: number;
  screwPrice: number;
  rotaryValve: number;
  traceHeating: number;
  diverterValve: number;
  totalSale: number;
  discount: string;
  saelenPrice: number;
  insulatedLids: number;
  fanKw: number;
  absPwrKw: number;
  blastValves: number;
  diverterDiaMm: number;
  compressedAir: number;
}

export interface ItemisedRow extends PriceRow {
  totalSaleLids: number;
  cablePipeTray: number;
  rhkNote8: string;
  outputKw: number;
}

export interface CompressorOption {
  name: string;
  powerKw: number;
  tankLitre?: number;
  usage: string;
  price: number;
}

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [DecimalPipe, TranslateModule],
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.scss',
})
export class PricesComponent {
  readonly priceDate = '01/01/2025';
  readonly priceUpdated = '27/10/25';

  readonly mainTable: PriceRow[] = [
    { model: 'HTPL110', maxFlow: 1600, noScrews: 0, filterPrice: 35566, screwPrice: 0, rotaryValve: 3850, traceHeating: 3890, diverterValve: 2390, totalSale: 45696, discount: '5%', saelenPrice: 43411.2, insulatedLids: 505, fanKw: 4, absPwrKw: 1.97, blastValves: 10, diverterDiaMm: 200, compressedAir: 7.32 },
    { model: 'HTMCL272', maxFlow: 4020, noScrews: 0, filterPrice: 51098, screwPrice: 0, rotaryValve: 4227, traceHeating: 4670, diverterValve: 2718, totalSale: 62713, discount: '5%', saelenPrice: 59577.35, insulatedLids: 827, fanKw: 11, absPwrKw: 5.2, blastValves: 16, diverterDiaMm: 300, compressedAir: 7.32 },
    { model: 'HTMCL360', maxFlow: 5310, noScrews: 0, filterPrice: 58920, screwPrice: 0, rotaryValve: 4450, traceHeating: 4890, diverterValve: 2850, totalSale: 71110, discount: '5%', saelenPrice: 67554.5, insulatedLids: 892, fanKw: 15, absPwrKw: 7.1, blastValves: 20, diverterDiaMm: 350, compressedAir: 7.32 },
    { model: 'HTMCL432', maxFlow: 6370, noScrews: 0, filterPrice: 65200, screwPrice: 0, rotaryValve: 4680, traceHeating: 5120, diverterValve: 2980, totalSale: 77980, discount: '5%', saelenPrice: 73981, insulatedLids: 945, fanKw: 18, absPwrKw: 8.5, blastValves: 24, diverterDiaMm: 400, compressedAir: 7.32 },
    { model: 'HTMCL504', maxFlow: 7430, noScrews: 0, filterPrice: 71850, screwPrice: 0, rotaryValve: 4920, traceHeating: 5350, diverterValve: 3120, totalSale: 85240, discount: '5%', saelenPrice: 80978, insulatedLids: 1010, fanKw: 20, absPwrKw: 9.8, blastValves: 28, diverterDiaMm: 450, compressedAir: 7.32 },
    { model: 'HTMCL540', modelNote: 10, maxFlow: 7960, noScrews: 0, filterPrice: 75200, screwPrice: 0, rotaryValve: 5050, traceHeating: 5480, diverterValve: 3180, totalSale: 88910, discount: '5%', saelenPrice: 84464.5, insulatedLids: 1050, fanKw: 22, absPwrKw: 10.6, blastValves: 30, diverterDiaMm: 480, compressedAir: 7.32 },
    { model: 'HTMCL612', modelNote: 10, maxFlow: 9010, noScrews: 0, filterPrice: 82100, screwPrice: 0, rotaryValve: 5180, traceHeating: 5620, diverterValve: 3280, totalSale: 96180, discount: '5%', saelenPrice: 91371, insulatedLids: 1095, fanKw: 25, absPwrKw: 11.9, blastValves: 34, diverterDiaMm: 520, compressedAir: 7.32 },
    { model: 'HTMCL720', modelNote: 11, maxFlow: 10650, noScrews: 0, filterPrice: 95800, screwPrice: 0, rotaryValve: 5450, traceHeating: 5890, diverterValve: 3420, totalSale: 110560, discount: '5%', saelenPrice: 105032, insulatedLids: 1180, fanKw: 30, absPwrKw: 14.2, blastValves: 40, diverterDiaMm: 560, compressedAir: 7.32 },
    { model: 'HTMCL816', maxFlow: 12080, noScrews: 1, filterPrice: 108500, screwPrice: 7380, rotaryValve: 5720, traceHeating: 6150, diverterValve: 3580, totalSale: 131330, discount: '5%', saelenPrice: 124763.5, insulatedLids: 1280, fanKw: 37, absPwrKw: 16.1, blastValves: 46, diverterDiaMm: 600, compressedAir: 7.32 },
    { model: 'HTMCL900', maxFlow: 13320, noScrews: 1, filterPrice: 119200, screwPrice: 7380, rotaryValve: 5980, traceHeating: 6420, diverterValve: 3720, totalSale: 142700, discount: '5%', saelenPrice: 135565, insulatedLids: 1350, fanKw: 45, absPwrKw: 18.5, blastValves: 50, diverterDiaMm: 650, compressedAir: 7.32 },
    { model: 'HTMCL1008', maxFlow: 14880, noScrews: 1, filterPrice: 131000, screwPrice: 7380, rotaryValve: 6250, traceHeating: 6720, diverterValve: 3880, totalSale: 157230, discount: '5%', saelenPrice: 149368.5, insulatedLids: 1420, fanKw: 55, absPwrKw: 21.2, blastValves: 56, diverterDiaMm: 700, compressedAir: 7.32 },
    { model: 'HTMCL1152', maxFlow: 17050, noScrews: 1, filterPrice: 145800, screwPrice: 7380, rotaryValve: 6580, traceHeating: 7050, diverterValve: 4050, totalSale: 173860, discount: '5%', saelenPrice: 165167, insulatedLids: 1520, fanKw: 75, absPwrKw: 25.8, blastValves: 64, diverterDiaMm: 750, compressedAir: 7.32 },
    { model: 'HTMCL1296', maxFlow: 19180, noScrews: 1, filterPrice: 161200, screwPrice: 7380, rotaryValve: 6920, traceHeating: 7380, diverterValve: 4220, totalSale: 191100, discount: '5%', saelenPrice: 181545, insulatedLids: 1620, fanKw: 90, absPwrKw: 30.5, blastValves: 72, diverterDiaMm: 800, compressedAir: 7.32 },
    { model: 'HTMCL1440', maxFlow: 21300, noScrews: 1, filterPrice: 178500, screwPrice: 7380, rotaryValve: 7280, traceHeating: 7720, diverterValve: 4420, totalSale: 211300, discount: '5%', saelenPrice: 200735, insulatedLids: 1750, fanKw: 110, absPwrKw: 35.8, blastValves: 80, diverterDiaMm: 850, compressedAir: 7.32 },
  ];

  readonly itemisedTable: ItemisedRow[] = this.mainTable.map((r, i) => {
    const cablePipeTray = i < 4 ? 1230 : i < 8 ? 1295 : i < 12 ? 1365 : 1475;
    const rhk = ['AK300', 'AK850', 'AK2000', 'AK3000', 'AK4000', 'AK4500', 'AK5000', 'AK6000', 'AK7500', 'AK8500', 'AK9500', 'AK11000', 'AK12500', 'AK14000'][i];
    const outKw = [300, 800, 1700, 2400, 3000, 3400, 3800, 4500, 5500, 6500, 7500, 9000, 10500, 12000][i];
    return {
      ...r,
      totalSaleLids: r.saelenPrice + r.insulatedLids,
      cablePipeTray,
      rhkNote8: rhk,
      outputKw: outKw,
    };
  });

  readonly compressors: CompressorOption[] = [
    { name: 'Piston 2.2kW 24 litre', powerKw: 2.2, tankLitre: 24, usage: 'For use up to 1600m³/hr', price: 1160 },
    { name: 'Piston 4kW 50 litre', powerKw: 4, tankLitre: 50, usage: 'For use up to 4020m³/hr', price: 1850 },
    { name: 'Piston 5.5kW 100 litre', powerKw: 5.5, tankLitre: 100, usage: 'For use up to 5310m³/hr', price: 2420 },
    { name: 'Rotary 7.5kW', powerKw: 7.5, usage: 'For use up to 10650m³/hr', price: 4520 },
    { name: 'Rotary 11kW', powerKw: 11, usage: 'For use up to 14880m³/hr', price: 5680 },
    { name: 'Rotary 15kW', powerKw: 15, usage: 'For use up to 21300m³/hr', price: 7618 },
  ];

  readonly dischargeOptions: { name: string; price: number }[] = [
    { name: 'Big Bag Enclosure', price: 680 },
    { name: 'Metal Bin with castors for Big Bag', price: 820 },
    { name: 'Big Bag Temperature Sensor', price: 720 },
  ];

  readonly ductJacketsRange = '£2,000.00 to £6,000.00';

  readonly noteKeys = [
    'note1', 'note2', 'note3', 'note4', 'note5', 'note6',
    'note7', 'note8', 'note9', 'note10', 'note11',
  ] as const;

  formatPrice(value: number): string {
    return '£' + value.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  modelWithNote(row: PriceRow): string {
    return row.modelNote ? `${row.model} (${row.modelNote})` : row.model;
  }
}
