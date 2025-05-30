'use client';

import React from 'react';
import styles from '@/styles/components/FilterSelectTable.module.scss';

interface ContractRow {
  id: string;
  name: string;
  count: number;
  startDate: string;
  status: '진행중' | '완료';
}

interface FilterSelectTableProps {
  data: ContractRow[];
  selectedIds: string[];
  onSelect: (selected: string[]) => void;
}

const FilterSelectTable: React.FC<FilterSelectTableProps> = ({
  data = [],
  selectedIds = [],
  onSelect,
}) => {
  const toggleSelection = (id: string) => {
    if (selectedIds.includes(id)) {
      onSelect(selectedIds.filter((item) => item !== id));
    } else {
      onSelect([...selectedIds, id]);
    }
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === data.length) {
      onSelect([]);
    } else {
      onSelect(data.map((row) => row.id));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <label htmlFor='selectAll' className={styles.checkboxLabel}>
          <input
            type='checkbox'
            id='selectAll'
            checked={selectedIds.length === data.length}
            onChange={toggleSelectAll}
          />
          <span>전체선택</span>
        </label>
        <span className={styles.count}>
          총 {data.length}건 중 {selectedIds.length}건
        </span>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              {/* <th /> */}
              <th>투자명</th>
              <th>거래 건수</th>
              <th>투자 시작일</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>
                  <div className={styles.checkboxWrapper}>
                    <input
                      type='checkbox'
                      id={`select-${row.id}`}
                      checked={selectedIds.includes(row.id)}
                      onChange={() => toggleSelection(row.id)}
                      aria-labelledby={`label-${row.id}`}
                    />
                    <label
                      id={`label-${row.id}`}
                      htmlFor={`select-${row.id}`}
                      className={styles.checkboxLabel}
                    >
                      <span className='sr-only'>{row.name} 선택</span>
                    </label>
                  </div>
                </td>

                <td>
                  <span
                    className={
                      row.status === '완료'
                        ? styles.finishedBadge
                        : styles.ongoingBadge
                    }
                  >
                    {row.name}
                  </span>
                </td>
                <td>{row.count}건</td>
                <td>{row.startDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FilterSelectTable;
