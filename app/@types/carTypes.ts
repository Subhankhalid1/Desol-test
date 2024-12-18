export interface Car {
  id: number;
  title: string;
  image?: string;
  publishYear: string;
}

export interface CarsListProps {
  car: Car[];
  totalPages: number;
  onLogout: () => void;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface CarListHeaderProps {
  handleCreateCar: () => void;
  logout?: () => void;
}
