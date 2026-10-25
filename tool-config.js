export const tool={
  "id": "E056",
  "slug": "eng-schwarzschild-radius",
  "title": "슈바르츠실트 반지름 계산기",
  "title_en": "Schwarzschild Radius Calculator",
  "category": "우주",
  "category_en": "Space",
  "fields": [
    {
      "key": "m",
      "label": "질량 M",
      "label_en": "Mass M",
      "dimension": "mass",
      "example": 1.98847e+30,
      "constraint": "positive",
      "display_unit": "kg",
      "display_value": "1.98847e+30"
    }
  ],
  "result_label": "슈바르츠실트 반지름 r_s",
  "result_label_en": "Schwarzschild radius r_s",
  "result_dimension": "length",
  "formula": "r_s = 2GM/c²",
  "purpose": "비회전·무전하 블랙홀 모델의 사건지평선 반지름 계산",
  "purpose_en": "Calculate the horizon radius of a nonrotating uncharged black hole model.",
  "assumptions": "M>0. 비회전·무전하 슈바르츠실트 해의 반지름이다. 실제 천체가 블랙홀인지 판정하지 않으며 회전·전하·원반·그림자 크기는 제외한다.",
  "assumptions_en": "Required: M>0. This is the nonrotating uncharged Schwarzschild horizon radius. Excluded: spin, charge, disks and apparent shadow size. The result does not classify an observed object as a black hole.",
  "sources": [
    {
      "label": "OpenStax · 13 7 einsteins theory of gravity",
      "url": "https://openstax.org/books/university-physics-volume-1/pages/13-7-einsteins-theory-of-gravity"
    }
  ],
  "condition": "",
  "condition_en": "",
  "site": "https://nanalab.kr/eng-schwarzschild-radius/",
  "repository": "https://github.com/NaNaCompany/eng-schwarzschild-radius",
  "output_unit": "m"
};
